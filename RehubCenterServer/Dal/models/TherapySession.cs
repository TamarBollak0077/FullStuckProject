using System;
using System.Collections.Generic;

namespace RehubCenterServer.models;

public partial class TherapySession
{
    public int SessionId { get; set; }

    public int TherapistId { get; set; }

    public DateTime SessionDate { get; set; }

    public virtual ICollection<PatientSession> PatientSessions { get; set; } = new List<PatientSession>();

    public virtual Therapist Therapist { get; set; } = null!;
}
