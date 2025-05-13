using Dal.Entities;

public interface IBlPatient
{
    void Create(Patient p);
    IEnumerable<Patient> Read(); // להוסיף מתודה להחזרת רשימת מטופלים
    void UpdateContactInfo(int patientId, string newContactInfo);
    void Delete(int id); // להוסיף מתודה למחיקת מטופל
    public IEnumerable<string> GetContactInfo();
}
