using System;
using System.Collections.Generic;

namespace Dal.Entities;

public partial class Therapist
{
    public int TherapistId { get; set; }

    public string? Title { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Specialization { get; set; } = null!;

    public string ContactInfo { get; set; } = null!;
}
