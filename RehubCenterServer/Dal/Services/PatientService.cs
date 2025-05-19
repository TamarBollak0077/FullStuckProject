using Dal.API;
<<<<<<< HEAD
using Dal.Context;
using Dal.Entities;
=======
using RehubCenterServer.models;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services
{
    public class PatientService : IPatient
    {

<<<<<<< HEAD
        RehubDbContext rehubDbContext;

        public PatientService(RehubDbContext db)
        {
            rehubDbContext = db;
=======
        DatabaseManager databaseManager;

        public PatientService(DatabaseManager db)
        {
            databaseManager = db;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
        }
        public void Create(Patient p)
        {
            if (p == null)
                throw new ArgumentNullException("No employee details were entered.");

<<<<<<< HEAD
            rehubDbContext.Patients.Add(p);
            rehubDbContext.SaveChanges();
=======
            databaseManager.Patients.Add(p);
            databaseManager.SaveChanges();
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
        }

        public void Delete(Patient p)
        {
            // מחיקת כל הפגישות הקשורות למטופל
<<<<<<< HEAD
            var sessionsToDelete = rehubDbContext.PatientSessions.Where(s => s.PatientId == p.PatientId).ToList();
            rehubDbContext.PatientSessions.RemoveRange(sessionsToDelete);
            rehubDbContext.SaveChanges();

            if (p != null)
            {
                rehubDbContext.Patients.Remove(p);
                rehubDbContext.SaveChanges();
=======
            var sessionsToDelete = databaseManager.PatientSessions.Where(s => s.PatientId == p.PatientId).ToList();
            databaseManager.PatientSessions.RemoveRange(sessionsToDelete);
            databaseManager.SaveChanges();

            if (p != null)
            {
                databaseManager.Patients.Remove(p);
                databaseManager.SaveChanges();
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
            }

        }

        public List<Patient> Read()
        {
<<<<<<< HEAD
            return rehubDbContext.Patients.ToList();
=======
            return databaseManager.Patients.ToList();
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
        }
        public Patient GetById(int id)

        {
<<<<<<< HEAD
            return rehubDbContext.Patients.FirstOrDefault(p => p.PatientId == id) ?? null;
=======
            return databaseManager.Patients.FirstOrDefault(p => p.PatientId == id) ?? null;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
        }


        //updating the patient contactInfo details
        public void Update(Patient p)
        {
            if (p == null)
                throw new ArgumentNullException("No patient details were entered.");

<<<<<<< HEAD
            var existingPatient = rehubDbContext.Patients.FirstOrDefault(patient => patient.PatientId == p.PatientId);
=======
            var existingPatient = databaseManager.Patients.FirstOrDefault(patient => patient.PatientId == p.PatientId);
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
            if (existingPatient == null)
                throw new InvalidOperationException("Patient not found.");

            // עדכון פרטי המטופל
            existingPatient.ContactInfo = p.ContactInfo;

<<<<<<< HEAD
            rehubDbContext.SaveChanges();
        }

       //חיפוש לפי ID
        public Patient? GetByPatientId(int id)
        {
            return rehubDbContext.Patients.FirstOrDefault(p => p.PatientId == id);
        }


=======
            databaseManager.SaveChanges();
        }

>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
    }
}
