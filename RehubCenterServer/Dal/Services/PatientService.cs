using Dal.API;
using RehubCenterServer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services
{
    public class PatientService : IPatient
    {

        DatabaseManager databaseManager;

        public PatientService(DatabaseManager db)
        {
            databaseManager = db;
        }
        public void Create(Patient p)
        {
            if (p == null)
                throw new ArgumentNullException("No employee details were entered.");

            databaseManager.Patients.Add(p);
            databaseManager.SaveChanges();
        }

        public void Delete(Patient p)
        {
            // מחיקת כל הפגישות הקשורות למטופל
            var sessionsToDelete = databaseManager.PatientSessions.Where(s => s.PatientId == p.PatientId).ToList();
            databaseManager.PatientSessions.RemoveRange(sessionsToDelete);
            databaseManager.SaveChanges();

            if (p != null)
            {
                databaseManager.Patients.Remove(p);
                databaseManager.SaveChanges();
            }

        }

        public List<Patient> Read()
        {
            return databaseManager.Patients.ToList();
        }
        public Patient GetById(int id)

        {
            return databaseManager.Patients.FirstOrDefault(p => p.PatientId == id) ?? null;
        }

        public void Update(Patient item)
        {
            throw new NotImplementedException();
        }
    }
}
