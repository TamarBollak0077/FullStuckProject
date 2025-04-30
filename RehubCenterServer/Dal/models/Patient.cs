using System;
using System.Collections.Generic;

namespace RehubCenterServer.models;

public partial class Patient
{
    public int PatientId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public DateOnly? DateOfBirth { get; set; }

    public string ContactInfo { get; set; } = null!;

    public virtual ICollection<PatientSession> PatientSessions { get; set; } = new List<PatientSession>();
}
