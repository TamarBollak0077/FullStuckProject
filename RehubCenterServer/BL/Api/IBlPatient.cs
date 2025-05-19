<<<<<<< HEAD
﻿using Dal.Entities;
=======
﻿using RehubCenterServer.models;
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4

public interface IBlPatient
{
    void Create(Patient p);
    IEnumerable<Patient> Read(); // להוסיף מתודה להחזרת רשימת מטופלים
    void UpdateContactInfo(int patientId, string newContactInfo);
    void Delete(int id); // להוסיף מתודה למחיקת מטופל
    public IEnumerable<string> GetContactInfo();
<<<<<<< HEAD
    Patient? GetByPatientId(int id);

=======
>>>>>>> cea7f262b2e29ac0a0fc93f618fc5467922301f4
}
