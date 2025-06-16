using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dal.Migrations
{
    /// <inheritdoc />
    public partial class SyncModelWithDb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
            @"SELECT PatientSessionID, TherapistID INTO PatientSessions_TherapistID_Backup FROM PatientSessions"
               );
            // Drop the old column
            migrationBuilder.DropColumn(
                name: "TherapistID",
                table: "PatientSessions");

            // Add the new column with the correct type
            migrationBuilder.AddColumn<string>(
                name: "TherapistID",
                table: "PatientSessions",
                type: "varchar(50)",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Drop the string column
            migrationBuilder.DropColumn(
                name: "TherapistID",
                table: "PatientSessions");

            // Add the int column back
            migrationBuilder.AddColumn<int>(
                name: "TherapistID",
                table: "PatientSessions",
                type: "int",
                unicode: false,
                maxLength: 50,
                nullable: false,
                defaultValue: 0);
        }
    }
}
