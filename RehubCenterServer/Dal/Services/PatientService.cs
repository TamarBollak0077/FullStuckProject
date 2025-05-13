using Dal.API;
using Dal.Context;
using Dal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services
{
    public class PatientService : IPatient
    {

        RehubDbContext rehubDbContext;

        public PatientService(RehubDbContext db)
        {
            rehubDbContext = db;
        }
        public void Create(Patient p)
        {
            if (p == null)
                throw new ArgumentNullException("No employee details were entered.");

            rehubDbContext.Patients.Add(p);
            rehubDbContext.SaveChanges();
        }

        public void Delete(Patient p)
        {
            // מחיקת כל הפגישות הקשורות למטופל
            var sessionsToDelete = rehubDbContext.PatientSessions.Where(s => s.PatientId == p.PatientId).ToList();
            rehubDbContext.PatientSessions.RemoveRange(sessionsToDelete);
            rehubDbContext.SaveChanges();

            if (p != null)
            {
                rehubDbContext.Patients.Remove(p);
                rehubDbContext.SaveChanges();
            }

        }

        public List<Patient> Read()
        {
            return rehubDbContext.Patients.ToList();
        }
        public Patient GetById(int id)

        {
            return rehubDbContext.Patients.FirstOrDefault(p => p.PatientId == id) ?? null;
        }


        //updating the patient contactInfo details
        public void Update(Patient p)
        {
            if (p == null)
                throw new ArgumentNullException("No patient details were entered.");

            var existingPatient = rehubDbContext.Patients.FirstOrDefault(patient => patient.PatientId == p.PatientId);
            if (existingPatient == null)
                throw new InvalidOperationException("Patient not found.");

            // עדכון פרטי המטופל
            existingPatient.ContactInfo = p.ContactInfo;

            rehubDbContext.SaveChanges();
        }

    }
}
