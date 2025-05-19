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
    public class TherapistService : ITherapist
    {
        RehubDbContext rehubDbContext;

        public TherapistService(RehubDbContext db)
        {
            rehubDbContext = db;
        }

        public void Create(ITherapist item)
        {
            throw new NotImplementedException();
        }

        public void Create(Therapist item)
        {
            throw new NotImplementedException();
        }

        public void Delete(ITherapist item)
        {
            throw new NotImplementedException();
        }

        public void Delete(Therapist item)
        {
            throw new NotImplementedException();
        }

        public List<Therapist> Read()
        {
            return rehubDbContext.Therapists.ToList();
        }

        public void Update(Therapist item)
        {
            throw new NotImplementedException();
        }
    }
}
