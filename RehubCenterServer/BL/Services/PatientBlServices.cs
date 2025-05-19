using BL.Api;
using Dal.API;
<<<<<<< HEAD
using Dal.Entities;
=======
using RehubCenterServer.models;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
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
<<<<<<< HEAD
            if (p == null ||
                string.IsNullOrWhiteSpace(p.FirstName) ||
                string.IsNullOrWhiteSpace(p.LastName) ||
                string.IsNullOrWhiteSpace(p.ContactInfo) ||
                p.DateOfBirth == default)
            {
                throw new ArgumentException("All patient details are required, including Date of Birth.");
            }

=======
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
            patient.Create(p);
            Console.WriteLine("new patient added successfully!");
            Console.WriteLine("welcome " + p.FirstName + " " + p.LastName);
        }

<<<<<<< HEAD

=======
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
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
<<<<<<< HEAD
        //חיפוש לפי id
        public Patient? GetByPatientId(int id)
        {
            return patient.GetByPatientId(id);
        }

=======
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4

    }
}
