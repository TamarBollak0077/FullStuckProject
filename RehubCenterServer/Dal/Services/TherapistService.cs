using Dal.API;
using RehubCenterServer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.Services
{
    public class TherapistService:ITherapist
    {
        DatabaseManager databaseManager;

        public TherapistService(DatabaseManager db)
        {
            databaseManager = db;
        }

        public void Create(ITherapist item)
        {
            throw new NotImplementedException();
        }

        public void Delete(ITherapist item)
        {
            throw new NotImplementedException();
        }

        public List<ITherapist> Read()
        {
            throw new NotImplementedException();
        }

        public void Update(ITherapist item)
        {
            throw new NotImplementedException();
        }
    }
}
