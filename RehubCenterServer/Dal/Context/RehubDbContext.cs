using System;
using System.Collections.Generic;
using Dal.Entities;
using Microsoft.EntityFrameworkCore;

namespace Dal.Context;

public partial class RehubDbContext : DbContext
{
    public RehubDbContext()
    {
    }

    public RehubDbContext(DbContextOptions<RehubDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<PatientSession> PatientSessions { get; set; }

    public virtual DbSet<Therapist> Therapists { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\USER\\FullStuckProject-Git\\RehubCenterServer\\Dal\\DataBase\\RehubDataBase.mdf;Integrated Security=True;Connect Timeout=30");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Patient>(entity =>
        {
            entity.HasKey(e => e.PatientId).HasName("PK__tmp_ms_x__970EC36616CFDD90");

            entity.Property(e => e.PatientId).ValueGeneratedNever();
            entity.Property(e => e.ContactInfo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("ContactInfo ");
            entity.Property(e => e.DateOfBirth).HasColumnName("DateOfBirth ");
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FirstName ");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LastName ");
        });

        modelBuilder.Entity<PatientSession>(entity =>
        {
            entity.HasKey(e => e.PatientSessionId).HasName("PK__PatientS__7F94550A211833C8");

            entity.Property(e => e.PatientSessionId).HasColumnName("PatientSessionID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");
            entity.Property(e => e.SessionId).HasColumnName("SessionID");
            entity.Property(e => e.SessionType)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TherapistId).HasColumnName("TherapistID");

            entity.HasOne(d => d.Patient).WithMany(p => p.PatientSessions)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__PatientSe__Patie__5CD6CB2B");
        });

        modelBuilder.Entity<Therapist>(entity =>
        {
            entity.HasKey(e => e.TherapistId).HasName("PK__tmp_ms_x__4D621912BFFF3B25");

            entity.Property(e => e.TherapistId)
                .ValueGeneratedNever()
                .HasColumnName("TherapistID");
            entity.Property(e => e.ContactInfo)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FirstName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FirstName ");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LastName ");
            entity.Property(e => e.Specialization)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Title)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
