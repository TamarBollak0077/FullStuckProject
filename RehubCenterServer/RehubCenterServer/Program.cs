
using Dal.API;
using BL.Api;
using Dal.Services;
using RehubCenterServer.models;
using BL;
using BL.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

// ���� �� DatabaseManager ��������
builder.Services.AddScoped<DatabaseManager>();

// ����� ���� �� ��� ��������
builder.Services.AddScoped<IPatient, PatientService>();
builder.Services.AddScoped<ITherapist, TherapistService>();
builder.Services.AddScoped<IDal, DalManager>();
builder.Services.AddScoped<IBlManager, BlManager>();
builder.Services.AddScoped<IBlPatient, PatientBlServices>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOriginPolicy",
        builder => builder.AllowAnyOrigin() // ����� ��� �������
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAnyOriginPolicy");

app.MapControllers();

app.Run();

