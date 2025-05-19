using Dal.API;
using BL.Api;
using Dal.Services;
using Dal.Entities;
using Dal.Context;
using BL;
using BL.Services;
using Microsoft.EntityFrameworkCore; // נדרש בשביל UseSqlServer

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

// חיבור ה-DbContext עם connection string מה-appsettings.json
builder.Services.AddDbContext<RehubDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("RehubConnection")));

// שאר הרשמות ה-Service
builder.Services.AddScoped<IPatient, PatientService>();
builder.Services.AddScoped<ITherapist, TherapistService>();
builder.Services.AddScoped<IDal, DalManager>();
builder.Services.AddScoped<IBlManager, BlManager>();
builder.Services.AddScoped<IBlPatient, PatientBlServices>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOriginPolicy",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAnyOriginPolicy");

app.MapControllers();

app.Run();

