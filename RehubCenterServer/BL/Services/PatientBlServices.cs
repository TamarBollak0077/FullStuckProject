using BL.Api;
using Dal.API;
using RehubCenterServer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class PatientBlServices : IBlPatient
    {
        IPatient patient;
        public PatientBlServices(IDal dal)
        {
            patient = dal.Patient;
        }
        public void Create(Patient p)
        {
            patient.Create(p);
            Console.WriteLine("new patient added successfully!");
            Console.WriteLine("welcome " + p.FirstName + " " + p.LastName);
        }

        public void Delete(int id)
        {
            patient.Delete(patient.GetById(id));
            Console.WriteLine("patient " + id + " deleted successfully!");
        }

        public IEnumerable<Patient> Read()
        {
            return patient.Read();
        }
        public IEnumerable<string> GetContactInfo()
        {
            return patient.Read().Select(p => p.ContactInfo);
        }

        public void UpdateContactInfo(int patientId, string newContactInfo)
        {
            var existingPatient = patient.GetById(patientId);
            if (existingPatient == null)
            {
                throw new InvalidOperationException("Patient not found.");
            }

            existingPatient.ContactInfo = newContactInfo;
            patient.Update(existingPatient);
            Console.WriteLine("Contact info for patient " + existingPatient.FirstName + " " + existingPatient.LastName + " updated successfully.");
        }

    }
}
