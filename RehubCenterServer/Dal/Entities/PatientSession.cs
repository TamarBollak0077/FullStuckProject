using System;
using System.Collections.Generic;

namespace Dal.Entities;

public partial class PatientSession
{
    public int PatientSessionId { get; set; }

    public int SessionId { get; set; }

    public int PatientId { get; set; }

    public int TherapistId { get; set; }

    public DateOnly SessionDate { get; set; }

    public TimeOnly Hour { get; set; }

    public string SessionType { get; set; } = null!;

    public virtual Patient Patient { get; set; } = null!;
}
