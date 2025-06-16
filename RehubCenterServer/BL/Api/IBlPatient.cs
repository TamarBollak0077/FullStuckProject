using Dal.Entities;
public interface IBlPatient
{
    void Create(Patient p);
    IEnumerable<Patient> Read(); // להוסיף מתודה להחזרת רשימת מטופלים
    void UpdateContactInfo(string patientId, string newContactInfo);
    void Delete(string id); // להוסיף מתודה למחיקת מטופל
    public IEnumerable<string> GetContactInfo();

    Patient? GetByPatientId(string id);

}
