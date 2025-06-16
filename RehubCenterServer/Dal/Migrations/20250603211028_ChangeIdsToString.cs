using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dal.Migrations
{
    /// <inheritdoc />
    public partial class ChangeIdsToString : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Backup data
            migrationBuilder.Sql(
                @"SELECT PatientSessionID, PatientID, TherapistID INTO PatientSessions_Backup FROM PatientSessions");

            // Drop FK constraint before dropping PatientID
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions DROP CONSTRAINT FK__PatientSe__Patie__160F4887");

            // Drop PK constraint before dropping the column
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions DROP CONSTRAINT PK__PatientS__7F94550A211833C8");

            // Drop PK constraint before dropping the column TherapistID
            migrationBuilder.Sql(
                @"ALTER TABLE Therapists DROP CONSTRAINT PK__tmp_ms_x__4D6219129C70075B");

            // Drop and recreate PatientSessionID as string
            migrationBuilder.DropColumn(
                name: "PatientSessionID",
                table: "PatientSessions");

            migrationBuilder.AddColumn<string>(
                name: "PatientSessionID",
                table: "PatientSessions",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            // Drop and recreate PatientID as string
            migrationBuilder.DropColumn(
                name: "PatientID",
                table: "PatientSessions");

            migrationBuilder.AddColumn<string>(
                name: "PatientID",
                table: "PatientSessions",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            // Drop and recreate TherapistID as string in Therapists
            migrationBuilder.DropColumn(
                name: "TherapistID",
                table: "Therapists");

            migrationBuilder.AddColumn<string>(
                name: "TherapistID",
                table: "Therapists",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            // Restore TherapistID values from PatientSessions_Backup (if possible)
            migrationBuilder.Sql(
                @"UPDATE t
                  SET t.TherapistID = b.TherapistID
                  FROM Therapists t
                  JOIN (SELECT DISTINCT TherapistID FROM PatientSessions_Backup WHERE TherapistID IS NOT NULL AND TherapistID <> '') b
                  ON t.TherapistID = '' OR t.TherapistID IS NULL");

            // מחיקת שורות ריקות (אם יש)
            migrationBuilder.Sql(
                @"DELETE FROM Therapists WHERE TherapistID = '' OR TherapistID IS NULL");

            // Recreate PK constraint after adding the column TherapistID
            migrationBuilder.Sql(
                @"ALTER TABLE Therapists ADD CONSTRAINT PK__tmp_ms_x__4D6219129C70075B PRIMARY KEY (TherapistID)");

            // Drop and recreate PatientId as string in Patients
            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "Patients");

            migrationBuilder.AddColumn<string>(
                name: "PatientId",
                table: "Patients",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            // Restore data (if needed, you can add SQL here to copy from backup)
            migrationBuilder.Sql(
                @"UPDATE ps
                  SET ps.PatientSessionID = CAST(b.PatientSessionID AS varchar(50)),
                      ps.PatientID = CAST(b.PatientID AS varchar(50)),
                      ps.TherapistID = CAST(b.TherapistID AS varchar(50))
                  FROM PatientSessions ps
                  JOIN PatientSessions_Backup b ON ps.PatientSessionID = CAST(b.PatientSessionID AS varchar(50))");

            // Recreate PK constraint
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions ADD CONSTRAINT PK_PatientSessions PRIMARY KEY (PatientSessionID)");

            // Recreate FK constraint
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions ADD CONSTRAINT FK_PatientSessions_Patients FOREIGN KEY (PatientID) REFERENCES Patients(PatientId)");

            // Drop backup table
            migrationBuilder.Sql("DROP TABLE PatientSessions_Backup");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Drop and recreate columns as int (reverse)
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions ADD CONSTRAINT FK__PatientSe__Patie__160F4887 FOREIGN KEY (PatientID) REFERENCES Patients(PatientId)");
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions DROP CONSTRAINT PK_PatientSessions");

            // Drop PK constraint before dropping the column TherapistID
            migrationBuilder.Sql(
                @"ALTER TABLE Therapists DROP CONSTRAINT PK__tmp_ms_x__4D6219129C70075B");

            migrationBuilder.DropColumn(
                name: "PatientSessionID",
                table: "PatientSessions");

            migrationBuilder.AddColumn<int>(
                name: "PatientSessionID",
                table: "PatientSessions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.DropColumn(
                name: "PatientID",
                table: "PatientSessions");

            migrationBuilder.AddColumn<int>(
                name: "PatientID",
                table: "PatientSessions",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.DropColumn(
                name: "TherapistID",
                table: "Therapists");

            migrationBuilder.AddColumn<int>(
                name: "TherapistID",
                table: "Therapists",
                type: "int",
                nullable: false,
                defaultValue: 0);

            // Recreate PK constraint after adding the column TherapistID
            migrationBuilder.Sql(
                @"ALTER TABLE Therapists ADD CONSTRAINT PK__tmp_ms_x__4D6219129C70075B PRIMARY KEY (TherapistID)");

            migrationBuilder.DropColumn(
                name: "PatientId",
                table: "Patients");

            migrationBuilder.AddColumn<int>(
                name: "PatientId",
                table: "Patients",
                type: "int",
                nullable: false,
                defaultValue: 0);

            // Recreate PK constraint
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions ADD CONSTRAINT PK__PatientS__7F94550A211833C8 PRIMARY KEY (PatientSessionID)");

            // Recreate FK constraint
            migrationBuilder.Sql(
                @"ALTER TABLE PatientSessions ADD CONSTRAINT FK__PatientSe__Patie__160F4887 FOREIGN KEY (PatientID) REFERENCES Patients(PatientId)");
        }
    }
}