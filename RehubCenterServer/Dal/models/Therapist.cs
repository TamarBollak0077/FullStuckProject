using System;
using System.Collections.Generic;

namespace RehubCenterServer.models;

public partial class Therapist
{
    public int TherapistId { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Specialization { get; set; } = null!;

    public string ContactInfo { get; set; } = null!;

    public virtual ICollection<TherapySession> TherapySessions { get; set; } = new List<TherapySession>();
}
