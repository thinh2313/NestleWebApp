using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NestleWebApp.Migrations
{
    public partial class AppMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EMPLOYEE",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IDCODE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NAME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BU = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TIMEDRAW = table.Column<int>(type: "int", nullable: true),
                    RESULT = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GIFT = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EMPLOYEE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "LUCKYNUMBER",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NUMB = table.Column<int>(type: "int", nullable: false),
                    CONTENTS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IMAGE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STATUS = table.Column<bool>(type: "bit", nullable: false),
                    NOTE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LUCKYNUMBER", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EMPLOYEE");

            migrationBuilder.DropTable(
                name: "LUCKYNUMBER");
        }
    }
}
