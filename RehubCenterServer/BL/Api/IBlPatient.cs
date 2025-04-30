using RehubCenterServer.models;

public interface IBlPatient
{
    void Create(Patient p);
    IEnumerable<Patient> Read(); // להוסיף מתודה להחזרת רשימת מטופלים
    void Update(Patient p); // להוסיף מתודה לעדכון מטופל
    void Delete(int id); // להוסיף מתודה למחיקת מטופל
    public IEnumerable<string> GetContactInfo();
}
