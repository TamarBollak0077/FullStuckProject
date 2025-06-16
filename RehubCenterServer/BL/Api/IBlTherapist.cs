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
        void UpdateContactInfo(string therapistId, string newContactInfo);
        void Delete(string id); // להוסיף מתודה למחיקת מטפל
        public IEnumerable<string> GetContactInfo();
    }
}
