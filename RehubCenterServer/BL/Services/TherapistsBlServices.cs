using BL.Api;
using Dal.API;
using Dal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Services
{
    public class TherapistsBlServices : IBlTherapist
    {

        ITherapist therapist;
        public TherapistsBlServices(IDal dal)
        {
            therapist = dal.Therapist;
        }

        public void Create(Therapist t)
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

        public IEnumerable<Therapist> Read()
        {
            return therapist.Read();

        }

        public void UpdateContactInfo(string therapistId, string newContactInfo)
        {
            throw new NotImplementedException();
        }
    }
}
