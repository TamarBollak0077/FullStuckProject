using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace RehubCenterServer.models;

public partial class DatabaseManager : DbContext
{
    public DatabaseManager()
    {
    }

    public DatabaseManager(DbContextOptions<DatabaseManager> options)
        : base(options)
    {
    }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<PatientSession> PatientSessions { get; set; }

    public virtual DbSet<Therapist> Therapists { get; set; }

    public virtual DbSet<TherapySession> TherapySessions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
{
    if (!optionsBuilder.IsConfigured)
    {
        // כאן לא עושים כלום – הכל מגיע דרך התלויות (DI)
    }
}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Patient>(entity =>
        {
            entity.HasKey(e => e.PatientId).HasName("PK__Patients__970EC36629DEB00C");

            entity.Property(e => e.ContactInfo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("ContactInfo ");
            entity.Property(e => e.DateOfBirth).HasColumnName("DateOfBirth ");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("FirstName ");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("LastName ");
        });

        modelBuilder.Entity<PatientSession>(entity =>
        {
            entity.HasKey(e => e.PatientSessionId).HasName("PK__PatientS__7F94550A211833C8");

            entity.Property(e => e.PatientSessionId).HasColumnName("PatientSessionID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");
            entity.Property(e => e.SessionId).HasColumnName("SessionID");

            entity.HasOne(d => d.Patient).WithMany(p => p.PatientSessions)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PatientSe__Patie__5535A963");

            entity.HasOne(d => d.Session).WithMany(p => p.PatientSessions)
                .HasForeignKey(d => d.SessionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PatientSe__Sessi__5441852A");
        });

        modelBuilder.Entity<Therapist>(entity =>
        {
            entity.HasKey(e => e.TherapistId).HasName("PK__tmp_ms_x__4D62191249795BB3");

            entity.Property(e => e.TherapistId)
                .ValueGeneratedNever()
                .HasColumnName("TherapistID");
            entity.Property(e => e.ContactInfo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("FirstName ");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS")
                .HasColumnName("LastName ");
            entity.Property(e => e.Specialization)
                .HasMaxLength(100)
                .IsUnicode(false)
                .UseCollation("SQL_Latin1_General_CP1_CI_AS");
        });

        modelBuilder.Entity<TherapySession>(entity =>
        {
            entity.HasKey(e => e.SessionId).HasName("PK__TherapyS__C9F492704073E8BD");

            entity.Property(e => e.SessionId).HasColumnName("SessionID");
            entity.Property(e => e.SessionDate).HasColumnType("datetime");
            entity.Property(e => e.TherapistId).HasColumnName("TherapistID");

            entity.HasOne(d => d.Therapist).WithMany(p => p.TherapySessions)
                .HasForeignKey(d => d.TherapistId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__TherapySe__Thera__5812160E");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
