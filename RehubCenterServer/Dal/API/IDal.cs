using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal.API
{
    public interface IDal
    {
        public IPatient Patient { get; }
        public ITherapist Therapist { get; }
    }
}
