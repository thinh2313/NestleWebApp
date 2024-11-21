
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using NestleWebApp.Data;

namespace NestleWebApp.Models
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<EMPLOYEE> EMPLOYEE { get; set; }
        public DbSet<LUCKYNUMBER> LUCKYNUMBER { get; set; }

    }
}
