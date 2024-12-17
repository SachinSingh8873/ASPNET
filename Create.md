Edit this in  controller 

       public ActionResult Create()
       {
           return View(new ProductModel());
       }

       // POST: ProductController/Create
       [HttpPost]
       [ValidateAntiForgeryToken]
       public ActionResult Create(ProductModel productModel)
       {
           using (SqlConnection sqlCon = new SqlConnection(connectionstring))
           {
               sqlCon.Open();
               string query = "INSERT INTO Product VALUES(@ProductName,@Price,@Count)";
               SqlCommand sqlCmd = new SqlCommand(query, sqlCon);
               sqlCmd.Parameters.AddWithValue("@ProductName", productModel.ProductName);
               sqlCmd.Parameters.AddWithValue("@Price", productModel.Price);
               sqlCmd.Parameters.AddWithValue("@Count", productModel.Count);
               sqlCmd.ExecuteNonQuery();
           }
               return RedirectToAction(nameof(Index));
           }
     
