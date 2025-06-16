
﻿using Dal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.API
{
    public interface IPatient : ICrud<Patient>
    {
        public Patient GetById(string id);
        Patient? GetByPatientId(string id);

    }
}
