In this File there is written the steps of fetching the data from database without using entity framework
1st install "Microsoft.Data.SqlClient;" install this from nuget package manager
2nd add a Cntroller of your project and code like below, this is the code of viewing the data from database to a simple web page and this code is written in controller folder.

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data
using Microsoft.Data.SqlClient;
using MvcCrud.Models;
namespace MvcCrud.Controllers
{
    public class ProductController : Controller
    { 
        string connectionstring = @"Data Source = localhost; Initial Catalog = MvcCrudDB; Integrated Security=True; TrustServerCertificate=True";
        [HttpGet]
        public ActionResult Index()
        {
            DataTable dtblProduct = new DataTable();
            using (SqlConnection sqlCon = new SqlConnection(connectionstring))
            {
                sqlCon.Open();
                SqlDataAdapter sqlDa = new SqlDataAdapter("SELECT * FROM Product", sqlCon);
                sqlDa.Fill(dtblProduct);
            }
                return View(dtblProduct);
        }


Now in HTML view page write code like this 

@model System.Data.DataTable
<h2>Index</h2>
<table class="table table-bordered table-striped">
    <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Count</th>
    </tr>
    @for (int i=0; i< Model.Rows.Count; i++)
    {
        <tr>
            <td> @Model.Rows[i][1]</td>
            <td> @Model.Rows[i][2]</td>
            <td> @Model.Rows[i][3]</td>
        </tr>
    }
</table>
