using BL;
using BL.Api;
using BL.Services;
using Dal.API;
using Dal.Context;
using Dal.Entities;
using Dal.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);
var env = builder.Environment;

builder.Services.AddControllers();

builder.Services.AddDbContext<RehubDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("RehubConnection")));

builder.Services.AddScoped<IPatient, PatientService>();
builder.Services.AddScoped<ITherapist, TherapistService>();
builder.Services.AddScoped<IDal, DalManager>();
builder.Services.AddScoped<IBlManager, BlManager>();
builder.Services.AddScoped<IBlPatient, PatientBlServices>();
builder.Services.AddScoped<IBlTherapist, TherapistsBlServices>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAnyOriginPolicy",
        builder => builder.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

app.UseStaticFiles();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(env.ContentRootPath, "Images", "therapists")),
    RequestPath = "/Images/therapists"
});

app.UseCors("AllowAnyOriginPolicy");

app.MapControllers();

app.Run();
