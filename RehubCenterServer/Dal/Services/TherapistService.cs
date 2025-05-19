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
<<<<<<< HEAD
    public class TherapistService : ITherapist
    {
        RehubDbContext rehubDbContext;

        public TherapistService(RehubDbContext db)
        {
            rehubDbContext = db;
=======
    public class TherapistService:ITherapist
    {
        DatabaseManager databaseManager;

        public TherapistService(DatabaseManager db)
        {
            databaseManager = db;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
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
