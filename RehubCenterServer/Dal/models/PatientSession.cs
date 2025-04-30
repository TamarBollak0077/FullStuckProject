using System;
using System.Collections.Generic;

namespace RehubCenterServer.models;

public partial class PatientSession
{
    public int PatientSessionId { get; set; }

    public int SessionId { get; set; }

    public int PatientId { get; set; }

    public virtual Patient Patient { get; set; } = null!;

    public virtual TherapySession Session { get; set; } = null!;
}
