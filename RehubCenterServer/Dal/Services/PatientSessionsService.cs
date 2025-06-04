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
    public class PatientSessionsService : IPatientSessions
    {
        RehubDbContext rehubDbContext;

        public PatientSessionsService(RehubDbContext db)
        {
            rehubDbContext = db;
        }
        public List<PatientSession> GetSessionsByPatientId(string patientId)
        {
            // מימוש אמיתי, לדוג' חיבור ל-DB
            return Read().Where(s => s.PatientId == patientId).ToList();
        }

        public void Create(PatientSession ps)
        {
            throw new NotImplementedException();
        }
        public void Delete(string id)
        {
            throw new NotImplementedException();
        }
        public IEnumerable<string> GetContactInfo()
        {
            throw new NotImplementedException();
        }
        public IEnumerable<PatientSession> Read()
        {
            return rehubDbContext.PatientSessions.ToList();
        }
        public void Update(PatientSession ps)
        {
            throw new NotImplementedException();
        }

        List<PatientSession> ICrud<PatientSession>.Read()
        {
            throw new NotImplementedException();
        }

        public void Delete(PatientSession item)
        {
            throw new NotImplementedException();
        }
    }

}

