# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Product.destroy_all
User.destroy_all
Order.destroy_all

puts "🌱 Seeding spices..."
    oversized = Product.create(name: "Oversized Printed T-shirt", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fcd%2Fe2%2Fcde24ebee7f132565e6f3633e257e77cac836618.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B3%5D&call=url[file:/product/main]", price: 17.99, color: "White", inventory: 23, description: "Oversized T-shirt in soft cotton jersey with a printed graphic design at front. Ribbed crew neck and gently dropped shoulders.")
    crop = Product.create(name: "Ribbed Crop Top", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe6%2Fbd%2Fe6bdb151e4a44bc30fc1c67deded444e93ed9a54.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 12.99, color: "Black", inventory: 28, description: "Crop top in ribbed cotton jersey with a round neckline and long sleeves.")
    hjacket = Product.create(name: "Faux Fur Hooded Jacket", cat: "jacket", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe8%2F6e%2Fe86e115bd8fe4b6bdd6a640c7557fa4d274b8d49.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 49.99, color: "Black/white checked", inventory: 17, description: "Jacket in soft faux fur with a double-layered hood. Zipper at front, dropped shoulders, long sleeves, and diagonal welt front pockets. Covered elastic at cuffs and hem. Lined.")
    turtleneck = Product.create(name: "Rib-knit Turtleneck Dress", cat: "dress", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F13%2F56%2F135688eee634d2bb45de6a64be989ebeb2a7b86d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_dresses_mididresses%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 49.99, color: "Sage green", inventory: 9, description: "Straight-cut, slightly relaxed-fit, knee-length dress in soft, rib-knit fabric with wool content. Turtleneck, gently dropped shoulders, and long sleeves. Fine-knit ribbing at cuffs and hem.")
    twill = Product.create(name: "Wide-leg Twill Pants", cat: "pant", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F35%2Fb9%2F35b95dffeb1cde0818a5d0b5126b29a9b721cd0a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 17.99, color: "Green", inventory: 12, description: "Long, 5-pocket pants in stretch cotton twill. High waist, zip fly with button, and straight, wide legs.")
    rib = Product.create(name: "Rib-knit Cardigan", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe6%2Fbf%2Fe6bf67bd374c8a7093ea75a1870ed4daeca9ecd2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 19.99, color: "Light gray melange", inventory: 15, description: "Soft, rib-knit cardigan with wool content. V-neck, buttons at front, dropped shoulders, and long sleeves.")
    cardigan = Product.create(name: "Knit Wrap-front Cardigan", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff5%2Fd0%2Ff5d0ea35e690e9241a663e1b34289b4a196c5c57.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 24.99, color: "Cream", inventory: 21, description: "Wrap-front knit cardigan with ties at one side. Dropped shoulders, long balloon sleeves, and ribbing at cuffs and hem.")
    denim = Product.create(name: "Denim Jumpsuit", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F22%2Fea%2F22eae7cf5afc633a86a08ff2bfb80884a0cfb52c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 29.99, color: "Denim blue", inventory: 20, description: "Ankle-length jumpsuit in soft cotton denim. Collar, yoke, and concealed buttons at top. Seam at waist with drawstring. Front pockets, back pockets, and straight, wide legs.")
    jumpsuit = Product.create(name: "Wide-cut Jumpsuit", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F54%2Fc25481716d43fbaef9d44431049495a210b85cb5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 24.99, color: "Light beige", inventory: 18, description: "Jumpsuit in crêped jersey with a voluminous silhouette. Narrow shoulder straps, low-cut neckline front and back, and discreet side-seam pockets. Removable tie belt at waist.")
    coat =Product.create(name: "Long Coat", cat: "jacket", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6a%2F07%2F6a072a0ba307cde1dcaf25ec020fa918b4642d86.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 69.99, color: "Brown", inventory: 23, description: "Long, relaxed-fit coat in woven fabric. Heavily dropped shoulders, long sleeves, patch front pockets, and tie belt at waist. Straight-cut hem with slits at sides. No fasteners. Lined.")
    sweater = Product.create(name: "Sweatshirt", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5a%2Fdc%2F5adc4f3cb140b165fc6d0370834d1fb3542d8cc6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 24.99, color: "Bright red/Ski You Later", inventory: 20, description: "Relaxed-fit, crew-neck sweatshirt in lightweight, cotton-blend fabric. Dropped shoulders, long sleeves, and ribbing at neckline, cuffs, and hem.")
    pleated = Product.create(name: "Pleated Skirt", cat: "skirt", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F34%2Fb4%2F34b4de8be17485ab6d3d07a65a59724ca92cb5cf.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 39.99, color: "White", inventory: 19, description: "Calf-length, pleated skirt in woven fabric with a slight sheen. High waist, elasticized waistband, and overlocked hem. Unlined.")
    hoodie = Product.create(name: "Crop Hoodie", cat: "top", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4e%2F54%2F4e542a13db3628d36016f627738a1585286301f6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 17.99, color: "Light gray melange", inventory: 27, description: "Crop hoodie in cotton-blend jersey. Lined, drawstring hood, long sleeves with ribbed cuffs, and a raw-edge, cut-off hem.")
    biker = Product.create(name: "Faux Fur-detail Biker Jacket", cat: "jacket", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdd%2F09%2Fdd09a8a3fd957a5a1e1e80f13a4c51d2bfce26eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 69.99, color: "Black", inventory: 11, description: "Short biker jacket in grained faux leather with collar, cuffs, and hem in faux fur. Two tabs at top with metal buckles, a diagonal zipper at front, and side pockets with zipper. Lined.")
    jersey =Product.create(name: "Jersey Joggers", cat: "pant", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F99%2F77%2F99777f782c0a4a5a66ee5dd6cdb79c413439722b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 12.99, color: "Gray", inventory: 16, description: "Joggers in thick, cotton-blend jersey. Ribbed, elasticized waistband with drawstring. Slim legs with ribbed hems.")
    slim = Product.create(name: "Slim Mom High Ankle Jeans", cat: "pant", image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2Fc7%2Fdbc78dd2e36464c10c7f779890a550ced8f2c50d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_mom%5D%2Ccat%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]", price: 24.99, color: "Light beige", inventory: 22, description: "5-pocket, ankle-length jeans in slightly stretchy denim. Extra-high waist, zip fly, and gently tapered legs. Cotton content is partly recycled.")

    
    eva = User.create(first_name: "Eva", last_name: "Tu", email: "evatu@gmail.com", password: "12345", admin: true)
    name1 = User.create(first_name: "Test1", last_name: "Test1", email: "testt1@gmail.com", password: "11111", admin: false)
    name2 = User.create(first_name: "Test2", last_name: "Test2", email: "testt2@gmail.com", password: "22222", admin: false)
    
    
    Order.create(user:name1,product:slim,select:1)
    Order.create(user:name1,product:sweater,select:1)
    Order.create(user:name1,product:turtleneck,select:1)
    Order.create(user:name1,product:rib,select:2)
    Order.create(user:name1,product:oversized,select:3)

    Order.create(user:name2,product:hoodie,select:1)
    Order.create(user:name2,product:crop,select:1)
    
    
    puts "✅ Done seeding!"
