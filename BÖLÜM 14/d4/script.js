// 1- Sipariş bilgilerini object içerisinde saklayınız.


let orders = [
    {
        sipariş_id: 101,
        sipariş_tarihi: "31.12.2022",
        ödeme_şekli: "kredi kartı",
        kargo_adresi: "Yahya kaptan mah. Kocaeli İzmit",
        satın_alınan_ürünler: [
            {
                ürün_id: 5,
                ürün_başlığı: "IPhone 13 Pro",
                ürün_url: "http://abc.com/iphone-13-pro",
                ürün_fiyatı: 22000
            },
            {
                ürün_id: 6,
                ürün_başlığı: "IPhone 13 Pro Max",
                ürün_url: "http://abc.com/iphone-13-pro-max",
                ürün_fiyatı: 25000
            }
        ],
        müşteri:{
            müşteri_id: 12
        },
        satıcı:{
            firma_id: 34,
            firma_adı: "Apple Türkiye"
        }
    
    },
    {
        sipariş_id: 102,
        sipariş_tarihi: "30.12.2022",
        ödeme_şekli: "kredi kartı",
        kargo_adresi: "Yahya kaptan mah. Kocaeli İzmit",
        satın_alınan_ürünler: [
            {
                ürün_id: 6,
                ürün_başlığı: "IPhone 13 Pro Max",
                ürün_url: "http://abc.com/iphone-13-pro-max",
                ürün_fiyatı: 25000
            }
        ],
        müşteri:{
            müşteri_id: 12
        },
        satıcı:{
            firma_id: 34,
            firma_adı: "Apple Türkiye"
        }
    
    }

]

// 2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
orders.map((order)=>{
    let price= 0
    let last_price = 0
    order.satın_alınan_ürünler.map((urun)=>{
        price = price + urun.ürün_fiyatı
    })
    last_price = price + price*0.18
    console.log(`${order.sipariş_id}: ${last_price} TL (KDV: ${price*0.18})`)
    
})
console.log("\n")

// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.
let sum_price = 0
orders.map((order)=>{
    let price= 0
    let last_price = 0
    order.satın_alınan_ürünler.map((urun)=>{
        price += urun.ürün_fiyatı
    })
    last_price = price + price*0.18
    console.log(`${order.sipariş_id}: ${last_price} TL (KDV: ${price*0.18})`)
    sum_price += last_price
})
console.log(`\nToplam Fiyat: ${sum_price}`)