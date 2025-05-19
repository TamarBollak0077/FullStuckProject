using Dal.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Api
{
    public interface IBlTherapist
    {
        void Create(Therapist t);
        IEnumerable<Therapist> Read(); // להוסיף מתודה להחזרת רשימת מטפלים
        void UpdateContactInfo(int therapistId, string newContactInfo);
        void Delete(int id); // להוסיף מתודה למחיקת מטפל
        public IEnumerable<string> GetContactInfo();
    }
}
