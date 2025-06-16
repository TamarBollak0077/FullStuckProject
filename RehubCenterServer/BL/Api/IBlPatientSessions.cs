using Dal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBlPatientSessions
    {
        void Create(PatientSession ps);


        //אולי למחוק את READ
        IEnumerable<PatientSession> Read(); // להוסיף מתודה להחזרת תור מטופל
     
        void Update(PatientSession ps);
        void Delete(string id); // להוסיף מתודה למחיקת מטפל
        public IEnumerable<string> GetContactInfo();
        IEnumerable<PatientSession> GetSessionsByPatientId(string patientId);
    }
}
