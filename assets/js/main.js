// --- 1. DATOS DE LA TIENDA (CLAVES ACTUALIZADAS) ---
const storeData = {
   // CLAVES PRINCIPALES (USANDO data-key)
   "regular_challenge": [
      {
         "title": "Núcleo de Despertar de Superviviente",
         "icon": "assets/images/shop-items/WakeCore.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1500",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1800",
      },
      {
         "title": "Núcleo de reliquia",
         "icon": "assets/images/shop-items/EquipSSStone.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1500",
      },
      {
         "title": "Paquete de cofre de coleccionable legendario",
         "icon": "/assets/images/shop-items/collection_choose_11.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 2000",
      },
      {
         "title": "Paquete de elección de equipo épico",
         "icon": "/assets/images/shop-items/equip_choose_7.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1000",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1000",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1000",
      },
      {
         "title": "Cristal de evolución",
         "icon": "/assets/images/shop-items/PetStone.png",
         "multiplier": "x10",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 2000",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x10",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 1000",
      },
      {
         "title": "Fragmento de superviviente al azar",
         "icon": "/assets/images/shop-items/Frag_R.png",
         "multiplier": "x10",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 300",
      },
      {
         "title": "Caja de suministros excelente",
         "icon": "/assets/images/shop-items/equip_drop_0.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 150",
      },
      {
         "title": "Caja de piezas excelentes",
         "icon": "/assets/images/shop-items/accessory_drop.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 150",
      },
      {
         "title": "Caja de mascota excelente",
         "icon": "/assets/images/shop-items/pet_drop_0.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 100",
      },
      {
         "title": "Cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/collection_drop_4.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 150",
      },
      {
         "title": "Juguete de mascota épica al azar",
         "icon": "/assets/images/shop-items/PetToy_drop_7.png",
         "multiplier": "x1",
         "chances": "Ilimitado",
         "coin_icon": "/images/icons/exchange_302.png",
         "cost": "x 50",
      },
   ],

   "op_retreat": [
      {
         "title": "Núcleo de Xenomascota",
         "icon": "/assets/images/shop-items/SPetCore.png",
         "multiplier": "x1",
         "chances": "1 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 35K",
      },
      {
         "title": "Cofre de elección de chip de resonancia legendario",
         "icon": "/assets/images/shop-items/selectBox1_resonanceAccessory.png",
         "multiplier": "x1",
         "chances": "1 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 35K",
      },
      {
         "title": "Cofre de elección de Cristal del despertar",
         "icon": "/assets/images/shop-items/selectBox_petAwaken.png",
         "multiplier": "x1",
         "chances": "1 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 35K",
      },
      {
         "title": "Cofre de elección de Chip de resonancia",
         "icon": "/assets/images/shop-items/selectBox_resonanceAccessory.png",
         "multiplier": "x1",
         "chances": "1 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 35K",
      },
      {
         "title": "Cofre de elección de Núcleo de reliquia",
         "icon": "/assets/images/shop-items/selectBox_holyStone.png",
         "multiplier": "x1",
         "chances": "1 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 35K",
      },
      {
         "title": "Cofre de elección de Núcleo de despertar de superviviente",
         "icon": "/assets/images/shop-items/selectBox_agentAwaken.png",
         "multiplier": "x1",
         "chances": "1 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 35K",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "4 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 6500",
      },
      {
         "title": "Paquete de elección de masctota épica",
         "icon": "/assets/images/shop-items/pet_choose_7.png",
         "multiplier": "x1",
         "chances": "4 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 6500",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "4 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 6500",
      },
      {
         "title": "Paquete de elección de equipo épico",
         "icon": "/assets/images/shop-items/equip_choose_7.png",
         "multiplier": "x1",
         "chances": "4 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 6500",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "4 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 12K",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x1",
         "chances": "20 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 400",
      },
      {
         "title": "Cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/collection_drop_4.png",
         "multiplier": "x1",
         "chances": "8 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 300",
      },
      {
         "title": "Cofre de mascota excelente",
         "icon": "/assets/images/shop-items/pet_drop_0.png",
         "multiplier": "x1",
         "chances": "8 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 300",
      },
      {
         "title": "Caja de piezas excelente",
         "icon": "/assets/images/shop-items/accessory_drop.png",
         "multiplier": "x1",
         "chances": "8 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 300",
      },
      {
         "title": "Caja de suministros excelente",
         "icon": "/assets/images/shop-items/equip_drop_0.png",
         "multiplier": "x1",
         "chances": "8 restante",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 300",
      },
      {
         "title": "Fragmentos de superviviente al azar",
         "icon": "/assets/images/shop-items/Frag_R.png",
         "multiplier": "x1",
         "chances": "40 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 100",
      },
      {
         "title": "Llave de la caja de piezas",
         "icon": "/assets/images/shop-items/AccessoryKey.png",
         "multiplier": "x1",
         "chances": "30 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 30",
      },
      {
         "title": "Llave de cofre de coleccionable",
         "icon": "/assets/images/shop-items/CollectionKey.png",
         "multiplier": "x1",
         "chances": "30 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 30",
      },
      {
         "title": "Clave de suministros S",
         "icon": "/assets/images/shop-items/Currency_DiamondBoxSpecial.png",
         "multiplier": "x1",
         "chances": "30 restantes",
         "coin_icon": "/images/icons/EscapeCoin.png",
         "cost": "x 30",
      },
   ],

   // CLAVES DEL CLAN (Aseguramos el contenido para el Nivel 15)
   "clan_main": [],

   "clan_lvl_15": [
      {
         "title": "Paquete de cofre de coleccionable legendario",
         "icon": "/assets/images/shop-items/collection_choose_11.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 40K",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 36K",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x10",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 10K",
      },
      {
         "title": "Fragmento de superviviente a elección",
         "icon": "/assets/images/shop-items/Frag_S.png",
         "multiplier": "x5",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 4000",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 13.5K",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de elección de mascota épica",
         "icon": "/assets/images/shop-items/pet_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/Collection_entry_icon.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2500",
      },
      {
         "title": "Paquete de elección de pieza excelente",
         "icon": "/assets/images/shop-items/accessory_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Paquete de elección de equipo excelente",
         "icon": "/assets/images/shop-items/equip_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 3600K",
      },
      {
         "title": "Paquete de elección de mascota excelente",
         "icon": "/assets/images/shop-items/pet_choose_4.png",
         "multiplier": "x1",
         "chances": "6 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Cristal de evolución",
         "icon": "/assets/images/shop-items/PetStone.png",
         "multiplier": "x1",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2000",
      },
      {
         "title": "Llave de suministro S",
         "icon": "/assets/images/shop-items/Currency_DiamondBoxSpecial.png",
         "multiplier": "x1",
         "chances": "25 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de cofre de coleccionable",
         "icon": "/assets/images/shop-items/CollectionKey.png",
         "multiplier": "x1",
         "chances": "25 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de la caja de piezas",
         "icon": "/assets/images/shop-items/AccessoryKey.png",
         "multiplier": "x1",
         "chances": "25 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      }
   ],
   "clan_lvl_14": [
      {
         "title": "Paquete de cofre de coleccionable legendario",
         "icon": "/assets/images/shop-items/collection_choose_11.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 40K",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 36K",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x10",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 10K",
      },
      {
         "title": "Fragmento de superviviente a elección",
         "icon": "/assets/images/shop-items/Frag_S.png",
         "multiplier": "x5",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 4000",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 13.5K",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de elección de mascota épica",
         "icon": "/assets/images/shop-items/pet_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/Collection_entry_icon.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2500",
      },
      {
         "title": "Paquete de elección de pieza excelente",
         "icon": "/assets/images/shop-items/accessory_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Paquete de elección de equipo excelente",
         "icon": "/assets/images/shop-items/equip_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 3600K",
      },
      {
         "title": "Paquete de elección de mascota excelente",
         "icon": "/assets/images/shop-items/pet_choose_4.png",
         "multiplier": "x1",
         "chances": "6 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Cristal de evolución",
         "icon": "/assets/images/shop-items/PetStone.png",
         "multiplier": "x1",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2000",
      },
      {
         "title": "Llave de suministro S",
         "icon": "/assets/images/shop-items/Currency_DiamondBoxSpecial.png",
         "multiplier": "x1",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de cofre de coleccionable",
         "icon": "/assets/images/shop-items/CollectionKey.png",
         "multiplier": "x1",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de la caja de piezas",
         "icon": "/assets/images/shop-items/AccessoryKey.png",
         "multiplier": "x1",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      }
   ],
   "clan_lvl_13": [
      {
         "title": "Paquete de cofre de coleccionable legendario",
         "icon": "/assets/images/shop-items/collection_choose_11.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 40K",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 36K",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x10",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 10K",
      },
      {
         "title": "Fragmento de superviviente a elección",
         "icon": "/assets/images/shop-items/Frag_S.png",
         "multiplier": "x5",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 4000",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 13.5K",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de elección de mascota épica",
         "icon": "/assets/images/shop-items/pet_choose_7.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/Collection_entry_icon.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2500",
      },
      {
         "title": "Paquete de elección de pieza excelente",
         "icon": "/assets/images/shop-items/accessory_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Paquete de elección de equipo excelente",
         "icon": "/assets/images/shop-items/equip_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 3600K",
      },
      {
         "title": "Paquete de elección de mascota excelente",
         "icon": "/assets/images/shop-items/pet_choose_4.png",
         "multiplier": "x1",
         "chances": "3 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Cristal de evolución",
         "icon": "/assets/images/shop-items/PetStone.png",
         "multiplier": "x1",
         "chances": "10 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2000",
      },
      {
         "title": "Llave de suministro S",
         "icon": "/assets/images/shop-items/Currency_DiamondBoxSpecial.png",
         "multiplier": "x1",
         "chances": "15 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de cofre de coleccionable",
         "icon": "/assets/images/shop-items/CollectionKey.png",
         "multiplier": "x1",
         "chances": "15 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de la caja de piezas",
         "icon": "/assets/images/shop-items/AccessoryKey.png",
         "multiplier": "x1",
         "chances": "15 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      }
   ],
   "clan_lvl_12": [
      {
         "title": "Paquete de cofre de coleccionable legendario",
         "icon": "/assets/images/shop-items/collection_choose_11.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 40K",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 36K",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x10",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 10K",
      },
      {
         "title": "Fragmento de superviviente a elección",
         "icon": "/assets/images/shop-items/Frag_S.png",
         "multiplier": "x5",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 4000",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 13.5K",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de elección de mascota épica",
         "icon": "/assets/images/shop-items/pet_choose_7.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/Collection_entry_icon.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2500",
      },
      {
         "title": "Paquete de elección de pieza excelente",
         "icon": "/assets/images/shop-items/accessory_choose_4.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Paquete de elección de equipo excelente",
         "icon": "/assets/images/shop-items/equip_choose_4.png",
         "multiplier": "x1",
         "chances": "4 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 3600K",
      },
      {
         "title": "Paquete de elección de mascota excelente",
         "icon": "/assets/images/shop-items/pet_choose_4.png",
         "multiplier": "x1",
         "chances": "3 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Cristal de evolución",
         "icon": "/assets/images/shop-items/PetStone.png",
         "multiplier": "x1",
         "chances": "10 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2000",
      },
      {
         "title": "Llave de suministro S",
         "icon": "/assets/images/shop-items/Currency_DiamondBoxSpecial.png",
         "multiplier": "x1",
         "chances": "10 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de cofre de coleccionable",
         "icon": "/assets/images/shop-items/CollectionKey.png",
         "multiplier": "x1",
         "chances": "10 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de la caja de piezas",
         "icon": "/assets/images/shop-items/AccessoryKey.png",
         "multiplier": "x1",
         "chances": "10 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      }
   ],
   "clan_lvl_1_11": [
      {
         "title": "Paquete de cofre de coleccionable legendario",
         "icon": "/assets/images/shop-items/collection_choose_11.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 40K",
      },
      {
         "title": "Paquete de elección de equipo excelente de grado S",
         "icon": "/assets/images/shop-items/equip_choose_S_4.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 36K",
      },
      {
         "title": "Fragmento de Maestro Yang",
         "icon": "/assets/images/shop-items/Frag_9.png",
         "multiplier": "x10",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 10K",
      },
      {
         "title": "Fragmento de superviviente a elección",
         "icon": "/assets/images/shop-items/Frag_S.png",
         "multiplier": "x5",
         "chances": "20 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 4000",
      },
      {
         "title": "Paquete de cofre de coleccionable épico",
         "icon": "/assets/images/shop-items/collection_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 13.5K",
      },
      {
         "title": "Paquete de elección de pieza épica",
         "icon": "/assets/images/shop-items/accessory_choose_7.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de elección de mascota épica",
         "icon": "/assets/images/shop-items/pet_choose_7.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 18K",
      },
      {
         "title": "Paquete de cofre de coleccionable excelente",
         "icon": "/assets/images/shop-items/Collection_entry_icon.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2500",
      },
      {
         "title": "Paquete de elección de pieza excelente",
         "icon": "/assets/images/shop-items/accessory_choose_4.png",
         "multiplier": "x1",
         "chances": "2 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Paquete de elección de equipo excelente",
         "icon": "/assets/images/shop-items/equip_choose_4.png",
         "multiplier": "x1",
         "chances": "1 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 3600K",
      },
      {
         "title": "Paquete de elección de mascota excelente",
         "icon": "/assets/images/shop-items/pet_choose_4.png",
         "multiplier": "x1",
         "chances": "3 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2200",
      },
      {
         "title": "Cristal de evolución",
         "icon": "/assets/images/shop-items/PetStone.png",
         "multiplier": "x1",
         "chances": "10 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 2000",
      },
      {
         "title": "Llave de suministro S",
         "icon": "/assets/images/shop-items/Currency_DiamondBoxSpecial.png",
         "multiplier": "x1",
         "chances": "5 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de cofre de coleccionable",
         "icon": "/assets/images/shop-items/CollectionKey.png",
         "multiplier": "x1",
         "chances": "5 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      },
      {
         "title": "Llave de la caja de piezas",
         "icon": "/assets/images/shop-items/AccessoryKey.png",
         "multiplier": "x1",
         "chances": "5 oportunidades",
         "coin_icon": "/images/icons/GongHuiBi.png",
         "cost": "x 600",
      }
   ]
};

const cardContainer = document.querySelector('.card_container');
const emptyState = document.getElementById('empty_state');

// --- 2. FUNCIONES DE RENDERIZADO ---

/**
 * Genera el HTML para una sola tarjeta de ítem.
 */
function createItemCardHTML(itemData) {
   return `
    <div class="item_card">
        <div class="item_title">
            <h3>${itemData.title}</h3>
        </div>
        <div class="item_container">
            <div class="item">
                <img class="item_icon" src="${itemData.icon}" alt="${itemData.title}" />
                <span class="multiplier">${itemData.multiplier}</span>
            </div>
            <span class="chances_left">${itemData.chances}</span>
        </div>
        <div class="cost_items">
            <div class="price_item">
                <img
                    class="coin_icon"
                    src="${itemData.coin_icon}"
                    alt="Moneda de Intercambio"
                    class="exchange_coin"
                />
                <span class="cost_multiplier">${itemData.cost}</span>
            </div>
        </div>
    </div>
    `;
}

/**
 * Carga y renderiza los ítems para la tienda seleccionada.
 */
function loadStoreContent(storeKey) {
   const container = document.querySelector(".card_container");
   container.innerHTML = "";
   const items = storeData[storeKey] || [];
   let allCardsHTML = "";
   items.forEach((item) => {
      allCardsHTML += createItemCardHTML(item);
   });

   container.innerHTML = allCardsHTML;
}

// --- 3. LÓGICA DE VISIBILIDAD Y MANEJO DE BOTONES 🚀 ---

/**
 * Gestiona la visibilidad de los botones de nivel del clan.
 */
function toggleClanLevelButtons(isVisible) {
   const levelButtons = document.querySelectorAll('.btn_clan_level');
   levelButtons.forEach(btn => {
      btn.style.display = isVisible ? 'block' : 'none';
   });
}

/**
 * Función que maneja el clic en CUALQUIER botón de la tienda.
 */
function handleStoreSelect(event) {
   const clickedButton = event.currentTarget;
   const storeKey = clickedButton.dataset.key; // Usamos el data-key
   const allButtons = document.querySelectorAll('.selector_store .btn');

   if (!storeKey) return;

   // 1. Gestión de Clases Activas (Limpiar todas las clases 'active' de todos los botones)
   allButtons.forEach(btn => btn.classList.remove('active'));
   clickedButton.classList.add('active'); // Activa el botón que fue clickeado

   // 2. Lógica Condicional de Visibilidad
   const isClanLevelButton = clickedButton.classList.contains('btn_clan_level');

   if (storeKey === 'clan_main') {
      // --- Clic en "Tienda del Clan" (MUESTRA NIVELES y carga Nivel 15) ---
      toggleClanLevelButtons(true);

      // 🚨 CAMBIO CLAVE: Cargamos directamente 'clan_lvl_15' pero mantenemos activo solo el botón principal.
      loadStoreContent('clan_lvl_15');

   } else if (isClanLevelButton) {
      // --- Clic en un Botón de Nivel (MANTIENE VISIBLE Y CARGA) ---

      toggleClanLevelButtons(true);
      // Activa el botón de nivel y también el botón principal del Clan ('clan_main')
      clickedButton.classList.add('active');
      document.querySelector('.btn_clan').classList.add('active');

      loadStoreContent(storeKey);

   } else {
      // --- Clic en Desafío/Retirada (OCULTA NIVELES) ---
      toggleClanLevelButtons(false);
      loadStoreContent(storeKey);
   }
}

// --- 4. INICIALIZACIÓN ---

document.addEventListener("DOMContentLoaded", () => {
   const allStoreButtons = document.querySelectorAll(".selector_store .btn");

   allStoreButtons.forEach((button) => {
      button.addEventListener("click", handleStoreSelect);
   });

   // 1. Carga Inicial
   // Al inicio, queremos que se cargue Desafío Habitual (regular_challenge)
   const initialButton = document.querySelector('.btn_regular_challenge');
   if (initialButton) {
      // El event.currentTarget será el botón de Desafío Habitual
      initialButton.setAttribute('data-key', 'regular_challenge'); // Aseguramos que tenga la clave
      handleStoreSelect({ currentTarget: initialButton });
   }

   // 2. Asegura que los botones de nivel estén ocultos al cargar la página
   toggleClanLevelButtons(false);
});
// --- 2. LOGICA DE RENDERIZADO ---

const container = document.getElementById('shop-container');
const buttons = document.querySelectorAll('.shop_nav:not(.sub_nav) .nav_btn');

function renderShop(category) {
   console.log('=== RENDER SHOP DEBUG ===');
   console.log('Category:', category);
   console.log('Container exists:', !!container);

   if (!container) return;
   container.innerHTML = ''; // Limpiar contenedor

   console.log('typeof eventData:', typeof eventData);
   console.log('eventData:', eventData);

   // Buscar en ambas fuentes de datos
   let items = storeData[category];
   console.log('Items from storeData:', items);

   if (!items && typeof eventData !== 'undefined') {
      // Para eventos, la estructura es diferente (tiene endTime e items)
      const eventObj = eventData[category];
      console.log('Event object:', eventObj);
      console.log('Event object has items?:', eventObj && eventObj.items);

      if (eventObj && eventObj.items) {
         items = eventObj.items;
         console.log('Items from eventData:', items);
         console.log('Items length:', items.length);
         console.log('First item:', items[0]);
      }
   }

   console.log('Final items to render:', items);
   console.log('Items is array?:', Array.isArray(items));
   console.log('Items length:', items ? items.length : 'null/undefined');

   if (!items) {
      console.log('NO ITEMS - RETURNING');
      return;
   }

   items.forEach(item => {
      // Corregir rutas de imágenes
      let iconPath = item.icon;
      if (iconPath.startsWith('/')) {
         // Remove leading slash
         iconPath = iconPath.substring(1);
      }

      // If it doesn't start with assets, prepend it.
      if (!iconPath.startsWith('assets/')) {
         iconPath = 'assets/' + iconPath;
      }

      let coinPath = item.coin_icon;
      if (coinPath.startsWith('/')) {
         coinPath = coinPath.substring(1);
      }
      if (!coinPath.startsWith('assets/')) {
         coinPath = 'assets/' + coinPath;
      }

      const card = document.createElement('div');
      card.classList.add('item_card');
      card.innerHTML = `
            <div class="item_title">
                <h3>${item.title}</h3>
            </div>
            <div class="item_container">
                <div class="item">
                    <img class="item_icon" src="${iconPath}" alt="${item.title}">
                    <span class="multiplier">${item.multiplier}</span>
                </div>
                <span class="chances_left">${item.chances}</span>
            </div>
            <div class="cost_items">
                <div class="price_item">
                    <img class="coin_icon" src="${coinPath}" alt="Coin" class="exchange_coin">
                    <span class="cost_multiplier">${item.cost}</span>
                </div>
            </div>
        `;
      container.appendChild(card);
   });
}

// Event Listeners
const subNav = document.getElementById('clan-sub-nav');
const subButtons = document.querySelectorAll('.sub_btn');

// Función auxiliar para habilitar/deshabilitar sub-botones
function toggleSubButtons(enable) {
   subButtons.forEach(btn => {
      btn.disabled = !enable;
      if (enable) {
         btn.classList.remove('disabled');
      } else {
         btn.classList.add('disabled');
      }
   });
}

// Inicializar estado: deshabilitar sub-botones
toggleSubButtons(false);

// Manejo de botones principales
buttons.forEach(btn => {
   btn.addEventListener('click', () => {
      // Remover clase active de botones principales
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      if (category === 'clan_store') {
         // Habilitar sub-botones
         toggleSubButtons(true);
         hideCountdown(); // Hide countdown when not on events

         // Renderizar por defecto el nivel 15 si no hay uno activo seleccionado previamente
         // O siempre reiniciar a 15, según preferencia. Vamos a reiniciar a 15 para consistencia.
         renderShop('clan_lvl_15');

         // Resetear active de sub-botones a Lv15
         subButtons.forEach(sb => sb.classList.remove('active'));
         document.querySelector('.sub_btn[data-category="clan_lvl_15"]').classList.add('active');

      } else if (category === 'current_event') {
         // Show countdown for events
         toggleSubButtons(false);
         renderShop(category);
         showCountdown();
      } else {
         // Deshabilitar sub-botones para otras tiendas (incluyendo eventos)
         toggleSubButtons(false);
         hideCountdown(); // Hide countdown when not on events
         renderShop(category);
      }
   });
});

// --- 3. COUNTDOWN TIMER LOGIC ---
const countdownContainer = document.getElementById('event-countdown');
let countdownInterval = null;

function updateCountdown() {
   if (typeof eventData === 'undefined' || !eventData.current_event) return;

   const endTime = new Date(eventData.current_event.endTime).getTime();
   const now = new Date().getTime();
   const timeLeft = endTime - now;

   if (timeLeft <= 0) {
      // Event expired - switch to next event
      switchToNextEvent();
      return;
   }

   // Calculate time units
   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   // Update display
   document.getElementById('days').textContent = String(days).padStart(2, '0');
   document.getElementById('hours').textContent = String(hours).padStart(2, '0');
   document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
   document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
   if (countdownInterval) {
      clearInterval(countdownInterval);
   }
   updateCountdown(); // Update immediately
   countdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

function stopCountdown() {
   if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
   }
}

function showCountdown() {
   if (countdownContainer) {
      countdownContainer.classList.remove('hidden');
      startCountdown();
   }
}

function hideCountdown() {
   if (countdownContainer) {
      countdownContainer.classList.add('hidden');
      stopCountdown();
   }
}

function switchToNextEvent() {
   if (typeof eventData === 'undefined') return;

   // Move next_event to current_event
   eventData.current_event = eventData.next_event;

   // Clear next_event (user will need to update this manually)
   eventData.next_event = {
      "endTime": "2099-12-31T23:59:59Z",
      "items": [
         {
            "title": "No hay próximo evento programado",
            "icon": "/images/items/collection_choose_11.png",
            "multiplier": "x1",
            "chances": "N/A",
            "coin_icon": "/images/icons/exchange_302.png",
            "cost": "x 0",
         }
      ]
   };

   // Re-render if we're on the event page
   const activeBtn = document.querySelector('.shop_nav:not(.sub_nav) .nav_btn.active');
   if (activeBtn && activeBtn.getAttribute('data-category') === 'current_event') {
      renderShop('current_event');
      startCountdown(); // Restart countdown with new event
   }
}

// Manejo de botones de sub-navegación (Niveles de Clan)
subButtons.forEach(btn => {
   btn.addEventListener('click', () => {
      if (btn.disabled) return; // Seguridad extra

      subButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      renderShop(category);
   });
});

// Render inicial - Ahora por defecto es evento actual
document.addEventListener('DOMContentLoaded', () => {
   renderShop('current_event');
   toggleSubButtons(false);
   showCountdown(); // Start countdown on page load
});
