<<<<<<< HEAD
﻿using Dal.Entities;
=======
﻿using RehubCenterServer.models;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.API
{
<<<<<<< HEAD
    public interface IPatient : ICrud<Patient>
    {
        public Patient GetById(int id);
        Patient? GetByPatientId(int id);

=======
    public interface IPatient: ICrud<Patient>
    {
        public Patient GetById(int id);
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
    }
}
