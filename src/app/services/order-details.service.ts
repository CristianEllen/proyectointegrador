import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Departamento cerca a UPAO",
      foodDetails:"Departamento ubicado en Av. Prol. Cesar Vallejo #234.",
      detallebanos:"N° BAÑOS: 2",
      detallehabitaciones: "N° HABITACIONES: 2",
      detallemascotas: "MASCOTAS: SI",
      detallecontacto: "CONTACTO: +51 937539285",
      foodPrice:900,
      foodImg:"https://img.properati.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1wcm9qZWN0cy1hZG1pbi1pbWFnZXMiLCJrZXkiOiIxMTc3YTFkNi1iY2Q1LTRkOGUtYTMxMi01YTE3OWM5ZmU5ZWMvMTE3N2ExZDYtYmNkNS00ZDhlLWEzMTItNWExNzljOWZlOWVjX2M0MjZmNWRiLTBjNTYtNDY5OC05YzM2LWM5MmVlOGFhMmZkMi5qcGciLCJicmFuZCI6IlBST1BFUkFUSSIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJoZWlnaHQiOjQ4MCwiZml0IjoiY292ZXIifX19"
    },
    {
      id:2,
      foodName:"Minidepartamento cerca a UCV",
      foodDetails:"Departamento ubicado en Av. Prol. Cesar Vallejo #234.",
      detallebanos:"N° BAÑOS: 1",
      detallehabitaciones: "N° HABITACIONES: 1",
      detallemascotas: "MASCOTAS: NO",
      detallecontacto: "CONTACTO: +51 937539285",
      foodPrice:450,
      foodImg:"https://ims.imgix.net/uploads/ims/project_image/image/81644/02_imagen-interior-apto.jpg"
    },
    {
      id:3,
      foodName:"Casa cerca a UPN",
      foodDetails:"Departamento ubicado en Av. Prol. Cesar Vallejo #234.",
      detallebanos:"N° BAÑOS: 3",
      detallehabitaciones: "N° HABITACIONES: 4",
      detallemascotas: "MASCOTAS: SI",
      detallecontacto: "CONTACTO: +51 937539285",
      foodPrice:1200,
      foodImg:"https://www.bienesonline.com/peru/photos/casa-en-venta-en-ate-lima-peru-14230013880.jpg"
    },
    {
      id:4,
      foodName:"Departamento cerca a UPAO",
      foodDetails:"Departamento ubicado en Av. Prol. Cesar Vallejo #234.",
      detallebanos:"N° BAÑOS: 3",
      detallehabitaciones: "N° HABITACIONES: 3",
      detallemascotas: "MASCOTAS: NO",
      detallecontacto: "CONTACTO: +51 937539285",
      foodPrice:140,
      foodImg:"https://img.clasf.pe/2020/05/29/Minidepartamento-en-Alquiler-de-Estreno-en-La-Urb-La-20200529081325.5636410015.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"Departamento ubicado en Av. Prol. Cesar Vallejo #234.",
      detallebanos:"N° BAÑOS: 1",
      detallehabitaciones: "N° HABITACIONES: 2",
      detallemascotas: "MASCOTAS: SI",
      detallecontacto: "CONTACTO: +51 937539285",
      foodPrice:105,
      foodImg:"https://pics.nuroa.com/amplio_e_iluminado_depto_con_club_house_2060121679402938667.jpg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Departamento ubicado en Av. Prol. Cesar Vallejo #234.",
      detallebanos:"N° BAÑOS: 1",
      detallehabitaciones: "N° HABITACIONES: 2",
      detallemascotas: "MASCOTAS: SI",
      detallecontacto: "CONTACTO: +51 937539285",
      foodPrice:219,
      foodImg:"https://img10.naventcdn.com/avisos/111/00/64/12/40/93/720x532/315844921.jpg"
    }
  ]


  /////////////////////////
  romieDetails=[
    {
      id:1,
      romieName:"Luis Alberto Mendoza Gonzales",
      romieSexo:"Sexo: Hombre",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://scontent.flim8-1.fna.fbcdn.net/v/t1.6435-9/181129815_2676048572689408_1318663488908219567_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHSsCZF0iP0DL6D4xqJa_xzbRJ0paPmChltEnSlo-YKGbZlSdNev4EHvRI6L9CH_6fgakyW2jJSxJBcAxne1faC&_nc_ohc=_GF7eT-26BAAX_yKM9A&_nc_ht=scontent.flim8-1.fna&oh=00_AfCIge418jIvFz79RCVD-RofqZVNHgA0I0M0CwDBAM2GHg&oe=6545DC9A"
    },
    {
      id:2,
      romieName:"Luis Alberto Mendoza Gonzales",
      romieSexo:"Sexo: Hombre",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://muhimu.es/wp-content/uploads/2017/04/FRENTE-NITIDA.jpg"
    },
    {
      id:3,
      romieName:"Maria Espinoza Guitierrez",
      romieSexo:"Sexo: Mujer",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/07/25/5fa43a4a54014.jpeg"
    },
    {
      id:4,
      romieName:"Alejandra Medina Soto",
      romieSexo:"Sexo: Hombre",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://perfilprofesional.online/wp-content/uploads/2023/07/Perfil-profesional-de-un-estudiante-universitario-ejemplo-jpg.webp"
    },
    {
      id:5,
      romieName:"Luis Alberto Mendoza Gonzales",
      romieSexo:"Sexo: Mujer",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://media.istockphoto.com/id/1048532250/es/foto/sonriente-joven-estudiante-con-libros-y-mochila.jpg?s=612x612&w=0&k=20&c=8U-gftSXuAgPCMN8os8o0UzYFVHAAvQBURdb_I-lK6M="
    },
    {
      id:6,
      romieName:"Luis Alberto Mendoza Gonzales",
      romieSexo:"Sexo: Hombre",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://us.123rf.com/450wm/studioaccendo/studioaccendo2309/studioaccendo230901427/212234730-retrato-de-un-apuesto-joven-asi%C3%A1tico-con-anteojos.jpg?ver=6"
    },
    {
      id:7,
      romieName:"Luis Alberto Mendoza Gonzales",
      romieSexo:"Sexo: Mujer",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://media.istockphoto.com/id/1048532250/es/foto/sonriente-joven-estudiante-con-libros-y-mochila.jpg?s=612x612&w=0&k=20&c=8U-gftSXuAgPCMN8os8o0UzYFVHAAvQBURdb_I-lK6M="
    },
    {
      id:8,
      romieName:"Luis Alberto Mendoza Gonzales",
      romieSexo:"Sexo: Hombre",
      romieEdad:"24 años",
      romieUniversidad: "Universidad: UPAO",
      romieCarrera: "Carrera: ING.Sistemas",
      romieContacto: "CONTACTO: +51 937539285",
      romieImg:"https://us.123rf.com/450wm/studioaccendo/studioaccendo2309/studioaccendo230901427/212234730-retrato-de-un-apuesto-joven-asi%C3%A1tico-con-anteojos.jpg?ver=6"
    },

  ] 
  

}
