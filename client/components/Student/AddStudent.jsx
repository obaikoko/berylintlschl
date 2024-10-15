'use client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  useGetStudentsQuery,
  useRegisterStudentMutation,
} from '@/src/features/students/studentApiSlice';
import Resizer from 'react-image-file-resizer';
import style from '../styles/register.module.css';
import Spinner from '../Spinner';
import { useRouter } from 'next/navigation';

const addStudent = () => {
  const router = useRouter();
  const [isStudentForm, setIsStudentForm] = useState(false);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    level: '',
    subLevel: '',
    gender: '',
    dateOfBirth: '',
    yearAdmitted: '',
    stateOfOrigin: '',
    localGvt: '',
    homeTown: '',
    sponsorName: '',
    sponsorRelationship: '',
    sponsorPhoneNumber: '',
    sponsorEmail: '',
  });

  const [registerStudent, { isLoading, isError }] =
    useRegisterStudentMutation();
  const { data, refetch } = useGetStudentsQuery();

  const {
    firstName,
    lastName,
    otherName,
    level,
    subLevel,
    dateOfBirth,
    gender,
    yearAdmitted,
    stateOfOrigin,
    localGvt,
    homeTown,
    sponsorName,
    sponsorRelationship,
    sponsorPhoneNumber,
    sponsorEmail,
  } = formData;

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        640,
        510,
        'JPEG',
        70,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64'
      );
    });

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const resizedImage = await resizeFile(file);
        setImage(resizedImage);
      } catch (error) {
        toast.error('Error resizing image');
        console.error('Error resizing image:', error);
      }
    }
  };
  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleStateChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    const selectedState = e.target.value;
    const localGvtSelect = document.getElementById('localGvt');

    localGvtSelect.innerHTML = '';

    if (selectedState === 'Abia') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aba North');
      addOption(localGvtSelect, 'Aba South');
      addOption(localGvtSelect, 'Arochukwu');
      addOption(localGvtSelect, 'Bende');
      addOption(localGvtSelect, 'Ikwuano');
      addOption(localGvtSelect, 'Isiala Ngwa North');
      addOption(localGvtSelect, 'Isiala Ngwa South');
      addOption(localGvtSelect, 'Isuikwuato');
      addOption(localGvtSelect, 'Obi Ngwa');
      addOption(localGvtSelect, 'Ohafia');
      addOption(localGvtSelect, 'Osisioma Ngwa');
      addOption(localGvtSelect, 'Ugwunagbo');
      addOption(localGvtSelect, 'Ukwa East');
      addOption(localGvtSelect, 'Ukwa West');
      addOption(localGvtSelect, 'Umuahia North');
      addOption(localGvtSelect, 'Umuahia South');
      addOption(localGvtSelect, 'Umu Nneochi');
    } else if (selectedState === 'Adamawa') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Demsa');
      addOption(localGvtSelect, 'Fufure');
      addOption(localGvtSelect, 'Ganye');
      addOption(localGvtSelect, 'Girei');
      addOption(localGvtSelect, 'Gombi');
      addOption(localGvtSelect, 'Guyuk');
      addOption(localGvtSelect, 'Hong');
      addOption(localGvtSelect, 'Jada');
      addOption(localGvtSelect, 'Lamurde');
      addOption(localGvtSelect, 'Madagali');
      addOption(localGvtSelect, 'Maiha');
      addOption(localGvtSelect, 'Mayo-Belwa');
      addOption(localGvtSelect, 'Michika');
      addOption(localGvtSelect, 'Mubi North');
      addOption(localGvtSelect, 'Mubi South');
      addOption(localGvtSelect, 'Numan');
      addOption(localGvtSelect, 'Shelleng');
      addOption(localGvtSelect, 'Song');
      addOption(localGvtSelect, 'Toungo');
      addOption(localGvtSelect, 'Yola North');
      addOption(localGvtSelect, 'Yola South');
    } else if (selectedState === 'Akwa Ibom') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Abak');
      addOption(localGvtSelect, 'Eastern Obolo');
      addOption(localGvtSelect, 'Eket');
      addOption(localGvtSelect, 'Esit Eket');
      addOption(localGvtSelect, 'Essien Udim');
      addOption(localGvtSelect, 'Etim Ekpo');
      addOption(localGvtSelect, 'Etinan');
      addOption(localGvtSelect, 'Ibeno');
      addOption(localGvtSelect, 'Ibesikpo Asutan');
      addOption(localGvtSelect, 'Ibiono Ibom');
      addOption(localGvtSelect, 'Ika');
      addOption(localGvtSelect, 'Ikono');
      addOption(localGvtSelect, 'Ikot Abasi');
      addOption(localGvtSelect, 'Ikot Ekpene');
      addOption(localGvtSelect, 'Ini');
      addOption(localGvtSelect, 'Itu');
      addOption(localGvtSelect, 'Mbo');
      addOption(localGvtSelect, 'Mkpat Enin');
      addOption(localGvtSelect, 'Nsit Atai');
      addOption(localGvtSelect, 'Nsit Ibom');
      addOption(localGvtSelect, 'Nsit Ubium');
      addOption(localGvtSelect, 'Obot Akara');
      addOption(localGvtSelect, 'Okobo');
      addOption(localGvtSelect, 'Onna');
      addOption(localGvtSelect, 'Oron');
      addOption(localGvtSelect, 'Oruk Anam');
      addOption(localGvtSelect, 'Ukanafun');
      addOption(localGvtSelect, 'Udung Uko');
      addOption(localGvtSelect, 'Uruan');
      addOption(localGvtSelect, 'Urue-Offong/Oruko');
      addOption(localGvtSelect, 'Uyo');
    } else if (selectedState === 'Anambra') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aguata');
      addOption(localGvtSelect, 'Anambra East');
      addOption(localGvtSelect, 'Anambra West');
      addOption(localGvtSelect, 'Anaocha');
      addOption(localGvtSelect, 'Awka North');
      addOption(localGvtSelect, 'Awka South');
      addOption(localGvtSelect, 'Ayamelum');
      addOption(localGvtSelect, 'Dunukofia');
      addOption(localGvtSelect, 'Ekwusigo');
      addOption(localGvtSelect, 'Idemili North');
      addOption(localGvtSelect, 'Idemili South');
      addOption(localGvtSelect, 'Ihiala');
      addOption(localGvtSelect, 'Njikoka');
      addOption(localGvtSelect, 'Nnewi North');
      addOption(localGvtSelect, 'Nnewi South');
      addOption(localGvtSelect, 'Ogbaru');
      addOption(localGvtSelect, 'Onitsha North');
      addOption(localGvtSelect, 'Onitsha South');
      addOption(localGvtSelect, 'Orumba North');
      addOption(localGvtSelect, 'Orumba South');
      addOption(localGvtSelect, 'Oyi');
    } else if (selectedState === 'Bauchi') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Alkaleri');
      addOption(localGvtSelect, 'Bauchi');
      addOption(localGvtSelect, 'Bogoro');
      addOption(localGvtSelect, 'Damban');
      addOption(localGvtSelect, 'Darazo');
      addOption(localGvtSelect, 'Dass');
      addOption(localGvtSelect, 'Gamawa');
      addOption(localGvtSelect, 'Ganjuwa');
      addOption(localGvtSelect, 'Giade');
      addOption(localGvtSelect, 'Itas/Gadau');
      addOption(localGvtSelect, 'Jamaare');
      addOption(localGvtSelect, 'Katagum');
      addOption(localGvtSelect, 'Kirfi');
      addOption(localGvtSelect, 'Misau');
      addOption(localGvtSelect, 'Ningi');
      addOption(localGvtSelect, 'Shira');
      addOption(localGvtSelect, 'Tafawa Balewa');
      addOption(localGvtSelect, 'Toro');
      addOption(localGvtSelect, 'Warji');
      addOption(localGvtSelect, 'Zaki');
    } else if (selectedState === 'Bayelsa') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Brass');
      addOption(localGvtSelect, 'Ekeremor');
      addOption(localGvtSelect, 'Kolokuma/Opokuma');
      addOption(localGvtSelect, 'Nembe');
      addOption(localGvtSelect, 'Ogbia');
      addOption(localGvtSelect, 'Sagbama');
      addOption(localGvtSelect, 'Southern Ijaw');
      addOption(localGvtSelect, 'Yenagoa');
    } else if (selectedState === 'Benue') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Ado');
      addOption(localGvtSelect, 'Agatu');
      addOption(localGvtSelect, 'Apa');
      addOption(localGvtSelect, 'Buruku');
      addOption(localGvtSelect, 'Gboko');
      addOption(localGvtSelect, 'Guma');
      addOption(localGvtSelect, 'Gwer East');
      addOption(localGvtSelect, 'Gwer West');
      addOption(localGvtSelect, 'Katsina-Ala');
      addOption(localGvtSelect, 'Konshisha');
      addOption(localGvtSelect, 'Kwande');
      addOption(localGvtSelect, 'Logo');
      addOption(localGvtSelect, 'Makurdi');
      addOption(localGvtSelect, 'Obi');
      addOption(localGvtSelect, 'Ogbadibo');
      addOption(localGvtSelect, 'Ohimini');
      addOption(localGvtSelect, 'Oju');
      addOption(localGvtSelect, 'Okpokwu');
      addOption(localGvtSelect, 'Otukpo');
      addOption(localGvtSelect, 'Tarka');
      addOption(localGvtSelect, 'Ukum');
      addOption(localGvtSelect, 'Ushongo');
      addOption(localGvtSelect, 'Vandeikya');
    } else if (selectedState === 'Borno') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Abadam');
      addOption(localGvtSelect, 'Askira/Uba');
      addOption(localGvtSelect, 'Bama');
      addOption(localGvtSelect, 'Bayo');
      addOption(localGvtSelect, 'Biu');
      addOption(localGvtSelect, 'Chibok');
      addOption(localGvtSelect, 'Damboa');
      addOption(localGvtSelect, 'Dikwa');
      addOption(localGvtSelect, 'Gubio');
      addOption(localGvtSelect, 'Guzamala');
      addOption(localGvtSelect, 'Gwoza');
      addOption(localGvtSelect, 'Hawul');
      addOption(localGvtSelect, 'Jere');
      addOption(localGvtSelect, 'Kaga');
      addOption(localGvtSelect, 'Kala/Balge');
      addOption(localGvtSelect, 'Konduga');
      addOption(localGvtSelect, 'Kukawa');
      addOption(localGvtSelect, 'Kwaya Kusar');
      addOption(localGvtSelect, 'Mafa');
      addOption(localGvtSelect, 'Magumeri');
      addOption(localGvtSelect, 'Maiduguri');
      addOption(localGvtSelect, 'Marte');
      addOption(localGvtSelect, 'Mobbar');
      addOption(localGvtSelect, 'Monguno');
      addOption(localGvtSelect, 'Ngala');
      addOption(localGvtSelect, 'Nganzai');
      addOption(localGvtSelect, 'Shani');
    } else if (selectedState === 'Cross River') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Akpabuyo');
      addOption(localGvtSelect, 'Abi');
      addOption(localGvtSelect, 'Akamkpa');
      addOption(localGvtSelect, 'Bekwarra');
      addOption(localGvtSelect, 'Bakassi');
      addOption(localGvtSelect, 'Biase');
      addOption(localGvtSelect, 'Boki');
      addOption(localGvtSelect, 'Calabar Municipal');
      addOption(localGvtSelect, 'Calabar South');
      addOption(localGvtSelect, 'Etung');
      addOption(localGvtSelect, 'Ikom');
      addOption(localGvtSelect, 'Obanliku');
      addOption(localGvtSelect, 'Obubra');
      addOption(localGvtSelect, 'Obudu');
      addOption(localGvtSelect, 'Odukpani');
      addOption(localGvtSelect, 'Ogoja');
      addOption(localGvtSelect, 'Yakuur');
      addOption(localGvtSelect, 'Yala');
    } else if (selectedState === 'Delta') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aniocha North');
      addOption(localGvtSelect, 'Aniocha South');
      addOption(localGvtSelect, 'Bomadi');
      addOption(localGvtSelect, 'Burutu');
      addOption(localGvtSelect, 'Ethiope East');
      addOption(localGvtSelect, 'Ethiope West');
      addOption(localGvtSelect, 'Ika North East');
      addOption(localGvtSelect, 'Ika South');
      addOption(localGvtSelect, 'Isoko North');
      addOption(localGvtSelect, 'Isoko South');
      addOption(localGvtSelect, 'Ndokwa East');
      addOption(localGvtSelect, 'Ndokwa West');
      addOption(localGvtSelect, 'Okpe');
      addOption(localGvtSelect, 'Oshimili North');
      addOption(localGvtSelect, 'Oshimili South');
      addOption(localGvtSelect, 'Patani');
      addOption(localGvtSelect, 'Sapele');
      addOption(localGvtSelect, 'Udu');
      addOption(localGvtSelect, 'Ughelli North');
      addOption(localGvtSelect, 'Ughelli South');
      addOption(localGvtSelect, 'Ukwuani');
      addOption(localGvtSelect, 'Uvwie');
      addOption(localGvtSelect, 'Warri North');
      addOption(localGvtSelect, 'Warri South');
      addOption(localGvtSelect, 'Warri South West');
    } else if (selectedState === 'Ebonyi') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Abakaliki');
      addOption(localGvtSelect, 'Afikpo North');
      addOption(localGvtSelect, 'Afikpo South');
      addOption(localGvtSelect, 'Ebonyi');
      addOption(localGvtSelect, 'Ezza North');
      addOption(localGvtSelect, 'Ezza South');
      addOption(localGvtSelect, 'Ikwo');
      addOption(localGvtSelect, 'Ishielu');
      addOption(localGvtSelect, 'Ivo');
      addOption(localGvtSelect, 'Izzi');
      addOption(localGvtSelect, 'Ohaozara');
      addOption(localGvtSelect, 'Ohaukwu');
      addOption(localGvtSelect, 'Onicha');
    } else if (selectedState === 'Edo') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Akoko Edo');
      addOption(localGvtSelect, 'Egor');
      addOption(localGvtSelect, 'Esan Central');
      addOption(localGvtSelect, 'Esan North-East');
      addOption(localGvtSelect, 'Esan South-East');
      addOption(localGvtSelect, 'Esan West');
      addOption(localGvtSelect, 'Etsako Central');
      addOption(localGvtSelect, 'Etsako East');
      addOption(localGvtSelect, 'Etsako West');
      addOption(localGvtSelect, 'Igueben');
      addOption(localGvtSelect, 'Ikpoba-Okha');
      addOption(localGvtSelect, 'Oredo');
      addOption(localGvtSelect, 'Orhionmwon');
      addOption(localGvtSelect, 'Ovia North-East');
      addOption(localGvtSelect, 'Ovia South-West');
      addOption(localGvtSelect, 'Owan East');
      addOption(localGvtSelect, 'Owan West');
      addOption(localGvtSelect, 'Uhunmwonde');
    } else if (selectedState === 'Ekiti') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Ado Ekiti');
      addOption(localGvtSelect, 'Efon');
      addOption(localGvtSelect, 'Ekiti East');
      addOption(localGvtSelect, 'Ekiti South-West');
      addOption(localGvtSelect, 'Ekiti West');
      addOption(localGvtSelect, 'Emure');
      addOption(localGvtSelect, 'Gbonyin');
      addOption(localGvtSelect, 'Ido Osi');
      addOption(localGvtSelect, 'Ijero');
      addOption(localGvtSelect, 'Ikere');
      addOption(localGvtSelect, 'Ikole');
      addOption(localGvtSelect, 'Ilejemeje');
      addOption(localGvtSelect, 'Irepodun/Ifelodun');
      addOption(localGvtSelect, 'Ise/Orun');
      addOption(localGvtSelect, 'Moba');
      addOption(localGvtSelect, 'Oye');
    } else if (selectedState === 'Enugu') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aninri');
      addOption(localGvtSelect, 'Awgu');
      addOption(localGvtSelect, 'Enugu East');
      addOption(localGvtSelect, 'Enugu North');
      addOption(localGvtSelect, 'Enugu South');
      addOption(localGvtSelect, 'Ezeagu');
      addOption(localGvtSelect, 'Igbo Etiti');
      addOption(localGvtSelect, 'Igbo Eze North');
      addOption(localGvtSelect, 'Igbo Eze South');
      addOption(localGvtSelect, 'Isi Uzo');
      addOption(localGvtSelect, 'Nkanu East');
      addOption(localGvtSelect, 'Nkanu West');
      addOption(localGvtSelect, 'Nsukka');
      addOption(localGvtSelect, 'Oji River');
      addOption(localGvtSelect, 'Udenu');
      addOption(localGvtSelect, 'Udi');
      addOption(localGvtSelect, 'Uzo Uwani');
    } else if (selectedState === 'Gombe') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Akko');
      addOption(localGvtSelect, 'Balanga');
      addOption(localGvtSelect, 'Billiri');
      addOption(localGvtSelect, 'Dukku');
      addOption(localGvtSelect, 'Funakaye');
      addOption(localGvtSelect, 'Gombe');
      addOption(localGvtSelect, 'Kaltungo');
      addOption(localGvtSelect, 'Kwami');
      addOption(localGvtSelect, 'Nafada');
      addOption(localGvtSelect, 'Shongom');
      addOption(localGvtSelect, 'Yamaltu/Deba');
    } else if (selectedState === 'Imo') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aboh Mbaise');
      addOption(localGvtSelect, 'Ahiazu Mbaise');
      addOption(localGvtSelect, 'Ehime Mbano');
      addOption(localGvtSelect, 'Ezinihitte');
      addOption(localGvtSelect, 'Ideato North');
      addOption(localGvtSelect, 'Ideato South');
      addOption(localGvtSelect, 'Ihitte/Uboma');
      addOption(localGvtSelect, 'Ikeduru');
      addOption(localGvtSelect, 'Isiala Mbano');
      addOption(localGvtSelect, 'Isu');
      addOption(localGvtSelect, 'Mbaitoli');
      addOption(localGvtSelect, 'Ngor Okpala');
      addOption(localGvtSelect, 'Njaba');
      addOption(localGvtSelect, 'Nkwerre');
      addOption(localGvtSelect, 'Nwangele');
      addOption(localGvtSelect, 'Obowo');
      addOption(localGvtSelect, 'Oguta');
      addOption(localGvtSelect, 'Ohaji/Egbema');
      addOption(localGvtSelect, 'Okigwe');
      addOption(localGvtSelect, 'Orlu');
      addOption(localGvtSelect, 'Orsu');
      addOption(localGvtSelect, 'Oru East');
      addOption(localGvtSelect, 'Oru West');
      addOption(localGvtSelect, 'Owerri Municipal');
      addOption(localGvtSelect, 'Owerri North');
      addOption(localGvtSelect, 'Owerri West');
      addOption(localGvtSelect, 'Unuimo');
    } else if (selectedState === 'Jigawa') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Auyo');
      addOption(localGvtSelect, 'Babura');
      addOption(localGvtSelect, 'Biriniwa');
      addOption(localGvtSelect, 'Birnin Kudu');
      addOption(localGvtSelect, 'Buji');
      addOption(localGvtSelect, 'Dutse');
      addOption(localGvtSelect, 'Gagarawa');
      addOption(localGvtSelect, 'Garki');
      addOption(localGvtSelect, 'Gumel');
      addOption(localGvtSelect, 'Guri');
      addOption(localGvtSelect, 'Gwaram');
      addOption(localGvtSelect, 'Gwiwa');
      addOption(localGvtSelect, 'Hadejia');
      addOption(localGvtSelect, 'Jahun');
      addOption(localGvtSelect, 'Kafin Hausa');
      addOption(localGvtSelect, 'Kaugama');
      addOption(localGvtSelect, 'Kazaure');
      addOption(localGvtSelect, 'Kiri Kasama');
      addOption(localGvtSelect, 'Kiyawa');
      addOption(localGvtSelect, 'Maigatari');
      addOption(localGvtSelect, 'Malam Madori');
      addOption(localGvtSelect, 'Miga');
      addOption(localGvtSelect, 'Ringim');
      addOption(localGvtSelect, 'Roni');
      addOption(localGvtSelect, 'Sule Tankarkar');
      addOption(localGvtSelect, 'Taura');
      addOption(localGvtSelect, 'Yankwashi');
    } else if (selectedState === 'Kaduna') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Birnin Gwari');
      addOption(localGvtSelect, 'Chikun');
      addOption(localGvtSelect, 'Giwa');
      addOption(localGvtSelect, 'Igabi');
      addOption(localGvtSelect, 'Ikara');
      addOption(localGvtSelect, 'Jaba');
      addOption(localGvtSelect, "Jema'a");
      addOption(localGvtSelect, 'Kachia');
      addOption(localGvtSelect, 'Kaduna North');
      addOption(localGvtSelect, 'Kaduna South');
      addOption(localGvtSelect, 'Kagarko');
      addOption(localGvtSelect, 'Kajuru');
      addOption(localGvtSelect, 'Kaura');
      addOption(localGvtSelect, 'Kauru');
      addOption(localGvtSelect, 'Kubau');
      addOption(localGvtSelect, 'Kudan');
      addOption(localGvtSelect, 'Lere');
      addOption(localGvtSelect, 'Makarfi');
      addOption(localGvtSelect, 'Sabon Gari');
      addOption(localGvtSelect, 'Sanga');
      addOption(localGvtSelect, 'Soba');
      addOption(localGvtSelect, 'Zangon Kataf');
      addOption(localGvtSelect, 'Zaria');
    } else if (selectedState === 'Kano') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Ajingi');
      addOption(localGvtSelect, 'Albasu');
      addOption(localGvtSelect, 'Bagwai');
      addOption(localGvtSelect, 'Bebeji');
      addOption(localGvtSelect, 'Bichi');
      addOption(localGvtSelect, 'Bunkure');
      addOption(localGvtSelect, 'Dala');
      addOption(localGvtSelect, 'Dambatta');
      addOption(localGvtSelect, 'Dawakin Kudu');
      addOption(localGvtSelect, 'Dawakin Tofa');
      addOption(localGvtSelect, 'Doguwa');
      addOption(localGvtSelect, 'Fagge');
      addOption(localGvtSelect, 'Gabasawa');
      addOption(localGvtSelect, 'Garko');
      addOption(localGvtSelect, 'Garun Mallam');
      addOption(localGvtSelect, 'Gaya');
      addOption(localGvtSelect, 'Gezawa');
      addOption(localGvtSelect, 'Gwale');
      addOption(localGvtSelect, 'Gwarzo');
      addOption(localGvtSelect, 'Kabo');
      addOption(localGvtSelect, 'Kano Municipal');
      addOption(localGvtSelect, 'Karaye');
      addOption(localGvtSelect, 'Kibiya');
      addOption(localGvtSelect, 'Kiru');
      addOption(localGvtSelect, 'Kumbotso');
      addOption(localGvtSelect, 'Kunchi');
      addOption(localGvtSelect, 'Kura');
      addOption(localGvtSelect, 'MadateOfBirthi');
      addOption(localGvtSelect, 'Makoda');
      addOption(localGvtSelect, 'Minjibir');
      addOption(localGvtSelect, 'Nasarawa');
      addOption(localGvtSelect, 'Rano');
      addOption(localGvtSelect, 'Rimin Gado');
      addOption(localGvtSelect, 'Shanono');
      addOption(localGvtSelect, 'Sumaila');
      addOption(localGvtSelect, 'Takai');
      addOption(localGvtSelect, 'Tarauni');
      addOption(localGvtSelect, 'Tofa');
      addOption(localGvtSelect, 'Tsanyawa');
      addOption(localGvtSelect, 'Tudun Wada');
      addOption(localGvtSelect, 'Ungogo');
      addOption(localGvtSelect, 'Warawa');
      addOption(localGvtSelect, 'Wudil');
    } else if (selectedState === 'Katsina') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Bakori');
      addOption(localGvtSelect, 'Batagarawa');
      addOption(localGvtSelect, 'Batsari');
      addOption(localGvtSelect, 'Baure');
      addOption(localGvtSelect, 'Bindawa');
      addOption(localGvtSelect, 'Charanchi');
      addOption(localGvtSelect, 'Dan Musa');
      addOption(localGvtSelect, 'Dandume');
      addOption(localGvtSelect, 'Danja');
      addOption(localGvtSelect, 'Daura');
      addOption(localGvtSelect, 'Dutsi');
      addOption(localGvtSelect, 'Dutsin Ma');
      addOption(localGvtSelect, 'Faskari');
      addOption(localGvtSelect, 'Funtua');
      addOption(localGvtSelect, 'Ingawa');
      addOption(localGvtSelect, 'Jibia');
      addOption(localGvtSelect, 'Kafur');
      addOption(localGvtSelect, 'Kaita');
      addOption(localGvtSelect, 'Kankara');
      addOption(localGvtSelect, 'Kankia');
      addOption(localGvtSelect, 'Katsina');
      addOption(localGvtSelect, 'Kurfi');
      addOption(localGvtSelect, 'Kusada');
      addOption(localGvtSelect, "Mai'adua");
      addOption(localGvtSelect, 'Malumfashi');
      addOption(localGvtSelect, 'Mani');
      addOption(localGvtSelect, 'Mashi');
      addOption(localGvtSelect, 'Matazu');
      addOption(localGvtSelect, 'Musawa');
      addOption(localGvtSelect, 'Rimi');
      addOption(localGvtSelect, 'Sabuwa');
      addOption(localGvtSelect, 'Safana');
      addOption(localGvtSelect, 'Sandamu');
      addOption(localGvtSelect, 'Zango');
    } else if (selectedState === 'Kebbi') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aleiro');
      addOption(localGvtSelect, 'Arewa Dandi');
      addOption(localGvtSelect, 'Argungu');
      addOption(localGvtSelect, 'Augie');
      addOption(localGvtSelect, 'Bagudo');
      addOption(localGvtSelect, 'Birnin Kebbi');
      addOption(localGvtSelect, 'Bunza');
      addOption(localGvtSelect, 'Dandi');
      addOption(localGvtSelect, 'Fakai');
      addOption(localGvtSelect, 'Gwandu');
      addOption(localGvtSelect, 'Jega');
      addOption(localGvtSelect, 'Kalgo');
      addOption(localGvtSelect, 'Koko/Besse');
      addOption(localGvtSelect, 'Maiyama');
      addOption(localGvtSelect, 'Ngaski');
      addOption(localGvtSelect, 'Sakaba');
      addOption(localGvtSelect, 'Shanga');
      addOption(localGvtSelect, 'Suru');
      addOption(localGvtSelect, 'Wasagu/Danko');
      addOption(localGvtSelect, 'Yauri');
      addOption(localGvtSelect, 'Zuru');
    } else if (selectedState === 'Kogi') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Adavi');
      addOption(localGvtSelect, 'Ajaokuta');
      addOption(localGvtSelect, 'Ankpa');
      addOption(localGvtSelect, 'Bassa');
      addOption(localGvtSelect, 'Dekina');
      addOption(localGvtSelect, 'Ibaji');
      addOption(localGvtSelect, 'Idah');
      addOption(localGvtSelect, 'Igalamela-Odolu');
      addOption(localGvtSelect, 'Ijumu');
      addOption(localGvtSelect, 'Kabba/Bunu');
      addOption(localGvtSelect, 'Kogi');
      addOption(localGvtSelect, 'Lokoja');
      addOption(localGvtSelect, 'Mopa-Muro');
      addOption(localGvtSelect, 'Ofu');
      addOption(localGvtSelect, 'Ogori/Magongo');
      addOption(localGvtSelect, 'Okehi');
      addOption(localGvtSelect, 'Okene');
      addOption(localGvtSelect, 'Olamaboro');
      addOption(localGvtSelect, 'Omala');
      addOption(localGvtSelect, 'Yagba East');
      addOption(localGvtSelect, 'Yagba West');
    } else if (selectedState === 'Kwara') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Asa');
      addOption(localGvtSelect, 'Baruten');
      addOption(localGvtSelect, 'Edu');
      addOption(localGvtSelect, 'Ekiti');
      addOption(localGvtSelect, 'Ifelodun');
      addOption(localGvtSelect, 'Ilorin East');
      addOption(localGvtSelect, 'Ilorin South');
      addOption(localGvtSelect, 'Ilorin West');
      addOption(localGvtSelect, 'Irepodun');
      addOption(localGvtSelect, 'Isin');
      addOption(localGvtSelect, 'Kaiama');
      addOption(localGvtSelect, 'Moro');
      addOption(localGvtSelect, 'Offa');
      addOption(localGvtSelect, 'Oke Ero');
      addOption(localGvtSelect, 'Oyun');
      addOption(localGvtSelect, 'Pategi');
    } else if (selectedState === 'Lagos') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Agege');
      addOption(localGvtSelect, 'Ajeromi-Ifelodun');
      addOption(localGvtSelect, 'Alimosho');
      addOption(localGvtSelect, 'Amuwo-Odofin');
      addOption(localGvtSelect, 'Apapa');
      addOption(localGvtSelect, 'Badagry');
      addOption(localGvtSelect, 'Epe');
      addOption(localGvtSelect, 'Eti-Osa');
      addOption(localGvtSelect, 'Ibeju-Lekki');
      addOption(localGvtSelect, 'Ifako-Ijaiye');
      addOption(localGvtSelect, 'Ikeja');
      addOption(localGvtSelect, 'Ikorodu');
      addOption(localGvtSelect, 'Kosofe');
      addOption(localGvtSelect, 'Lagos Island');
      addOption(localGvtSelect, 'Lagos Mainland');
      addOption(localGvtSelect, 'Mushin');
      addOption(localGvtSelect, 'Ojo');
      addOption(localGvtSelect, 'Oshodi-Isolo');
      addOption(localGvtSelect, 'Shomolu');
      addOption(localGvtSelect, 'Surulere');
    } else if (selectedState === 'Nasarawa') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Akwanga');
      addOption(localGvtSelect, 'Awe');
      addOption(localGvtSelect, 'Doma');
      addOption(localGvtSelect, 'Karu');
      addOption(localGvtSelect, 'Keana');
      addOption(localGvtSelect, 'Keffi');
      addOption(localGvtSelect, 'Kokona');
      addOption(localGvtSelect, 'Lafia');
      addOption(localGvtSelect, 'Nasarawa');
      addOption(localGvtSelect, 'Nasarawa-Eggon');
      addOption(localGvtSelect, 'Obi');
      addOption(localGvtSelect, 'Toto');
      addOption(localGvtSelect, 'Wamba');
    } else if (selectedState === 'Niger') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Agaie');
      addOption(localGvtSelect, 'Agwara');
      addOption(localGvtSelect, 'Bida');
      addOption(localGvtSelect, 'Borgu');
      addOption(localGvtSelect, 'Bosso');
      addOption(localGvtSelect, 'Chanchaga');
      addOption(localGvtSelect, 'Edati');
      addOption(localGvtSelect, 'Gbako');
      addOption(localGvtSelect, 'Gurara');
      addOption(localGvtSelect, 'Katcha');
      addOption(localGvtSelect, 'Kontagora');
      addOption(localGvtSelect, 'Lapai');
      addOption(localGvtSelect, 'Lavun');
      addOption(localGvtSelect, 'Magama');
      addOption(localGvtSelect, 'Mariga');
      addOption(localGvtSelect, 'Mashegu');
      addOption(localGvtSelect, 'Mokwa');
      addOption(localGvtSelect, 'Muya');
      addOption(localGvtSelect, 'Paikoro');
      addOption(localGvtSelect, 'Rafi');
      addOption(localGvtSelect, 'Rijau');
      addOption(localGvtSelect, 'Shiroro');
      addOption(localGvtSelect, 'Suleja');
      addOption(localGvtSelect, 'Tafa');
      addOption(localGvtSelect, 'Wushishi');
    } else if (selectedState === 'Ogun') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Abeokuta North');
      addOption(localGvtSelect, 'Abeokuta South');
      addOption(localGvtSelect, 'Ado-Odo/Ota');
      addOption(localGvtSelect, 'Ewekoro');
      addOption(localGvtSelect, 'Ifo');
      addOption(localGvtSelect, 'Ijebu East');
      addOption(localGvtSelect, 'Ijebu North');
      addOption(localGvtSelect, 'Ijebu North East');
      addOption(localGvtSelect, 'Ijebu Ode');
      addOption(localGvtSelect, 'Ikenne');
      addOption(localGvtSelect, 'Imeko Afon');
      addOption(localGvtSelect, 'Ipokia');
      addOption(localGvtSelect, 'Obafemi-Owode');
      addOption(localGvtSelect, 'Odeda');
      addOption(localGvtSelect, 'Odogbolu');
      addOption(localGvtSelect, 'Ogun Waterside');
      addOption(localGvtSelect, 'Remo North');
      addOption(localGvtSelect, 'Shagamu');
    } else if (selectedState === 'Ondo') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Akoko North East');
      addOption(localGvtSelect, 'Akoko North West');
      addOption(localGvtSelect, 'Akoko South East');
      addOption(localGvtSelect, 'Akoko South West');
      addOption(localGvtSelect, 'Akure North');
      addOption(localGvtSelect, 'Akure South');
      addOption(localGvtSelect, 'Ese-Odo');
      addOption(localGvtSelect, 'Idanre');
      addOption(localGvtSelect, 'Ifedore');
      addOption(localGvtSelect, 'Ilaje');
      addOption(localGvtSelect, 'Ile Oluji/Okeigbo');
      addOption(localGvtSelect, 'Irele');
      addOption(localGvtSelect, 'Odigbo');
      addOption(localGvtSelect, 'Okitipupa');
      addOption(localGvtSelect, 'Ondo East');
      addOption(localGvtSelect, 'Ondo West');
      addOption(localGvtSelect, 'Ose');
      addOption(localGvtSelect, 'Owo');
    } else if (selectedState === 'Osun') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Aiyedaade');
      addOption(localGvtSelect, 'Aiyedire');
      addOption(localGvtSelect, 'Atakunmosa East');
      addOption(localGvtSelect, 'Atakunmosa West');
      addOption(localGvtSelect, 'Boluwaduro');
      addOption(localGvtSelect, 'Boripe');
      addOption(localGvtSelect, 'Ede North');
      addOption(localGvtSelect, 'Ede South');
      addOption(localGvtSelect, 'Egbedore');
      addOption(localGvtSelect, 'Ejigbo');
      addOption(localGvtSelect, 'Ife Central');
      addOption(localGvtSelect, 'Ife East');
      addOption(localGvtSelect, 'Ife North');
      addOption(localGvtSelect, 'Ife South');
      addOption(localGvtSelect, 'Ifedayo');
      addOption(localGvtSelect, 'Ifelodun');
      addOption(localGvtSelect, 'Ila');
      addOption(localGvtSelect, 'Ilesa East');
      addOption(localGvtSelect, 'Ilesa West');
      addOption(localGvtSelect, 'Irepodun');
      addOption(localGvtSelect, 'Irewole');
      addOption(localGvtSelect, 'Isokan');
      addOption(localGvtSelect, 'Iwo');
      addOption(localGvtSelect, 'Obokun');
      addOption(localGvtSelect, 'Odo Otin');
      addOption(localGvtSelect, 'Ola Oluwa');
      addOption(localGvtSelect, 'Olorunda');
      addOption(localGvtSelect, 'Oriade');
      addOption(localGvtSelect, 'Orolu');
      addOption(localGvtSelect, 'Osogbo');
    } else if (selectedState === 'Oyo') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Afijio');
      addOption(localGvtSelect, 'Akinyele');
      addOption(localGvtSelect, 'Atiba');
      addOption(localGvtSelect, 'Atisbo');
      addOption(localGvtSelect, 'Egbeda');
      addOption(localGvtSelect, 'Ibadan North');
      addOption(localGvtSelect, 'Ibadan North East');
      addOption(localGvtSelect, 'Ibadan North West');
      addOption(localGvtSelect, 'Ibadan South East');
      addOption(localGvtSelect, 'Ibadan South West');
      addOption(localGvtSelect, 'Ibarapa Central');
      addOption(localGvtSelect, 'Ibarapa East');
      addOption(localGvtSelect, 'Ibarapa North');
      addOption(localGvtSelect, 'Ido');
      addOption(localGvtSelect, 'Irepo');
      addOption(localGvtSelect, 'Iseyin');
      addOption(localGvtSelect, 'Itesiwaju');
      addOption(localGvtSelect, 'Iwajowa');
      addOption(localGvtSelect, 'Kajola');
      addOption(localGvtSelect, 'Lagelu');
      addOption(localGvtSelect, 'Ogbomosho North');
      addOption(localGvtSelect, 'Ogbomosho South');
      addOption(localGvtSelect, 'Ogo Oluwa');
      addOption(localGvtSelect, 'Olorunsogo');
      addOption(localGvtSelect, 'Oluyole');
      addOption(localGvtSelect, 'Ona Ara');
      addOption(localGvtSelect, 'Orelope');
      addOption(localGvtSelect, 'Ori Ire');
      addOption(localGvtSelect, 'Oyo East');
      addOption(localGvtSelect, 'Oyo West');
      addOption(localGvtSelect, 'Saki East');
      addOption(localGvtSelect, 'Saki West');
      addOption(localGvtSelect, 'Surulere');
    } else if (selectedState === 'Platue') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Barkin Ladi');
      addOption(localGvtSelect, 'Bassa');
      addOption(localGvtSelect, 'Bokkos');
      addOption(localGvtSelect, 'Jos East');
      addOption(localGvtSelect, 'Jos North');
      addOption(localGvtSelect, 'Jos South');
      addOption(localGvtSelect, 'Kanam');
      addOption(localGvtSelect, 'Kanke');
      addOption(localGvtSelect, 'Langtang North');
      addOption(localGvtSelect, 'Langtang South');
      addOption(localGvtSelect, 'Mangu');
      addOption(localGvtSelect, 'Mikang');
      addOption(localGvtSelect, 'Pankshin');
      addOption(localGvtSelect, "Qua'an Pan");
      addOption(localGvtSelect, 'Riyom');
      addOption(localGvtSelect, 'Shendam');
      addOption(localGvtSelect, 'Wase');
    } else if (selectedState === 'Rivers') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Abua/Odual');
      addOption(localGvtSelect, 'Ahoada East');
      addOption(localGvtSelect, 'Ahoada West');
      addOption(localGvtSelect, 'Akuku-Toru');
      addOption(localGvtSelect, 'Andoni');
      addOption(localGvtSelect, 'Asari-Toru');
      addOption(localGvtSelect, 'Bonny');
      addOption(localGvtSelect, 'Degema');
      addOption(localGvtSelect, 'Eleme');
      addOption(localGvtSelect, 'Emohua');
      addOption(localGvtSelect, 'Etche');
      addOption(localGvtSelect, 'Gokana');
      addOption(localGvtSelect, 'Ikwerre');
      addOption(localGvtSelect, 'Khana');
      addOption(localGvtSelect, 'Obio/Akpor');
      addOption(localGvtSelect, 'Ogba/Egbema/Ndoni');
      addOption(localGvtSelect, 'Ogu/Bolo');
      addOption(localGvtSelect, 'Okrika');
      addOption(localGvtSelect, 'Omuma');
      addOption(localGvtSelect, 'Opobo/Nkoro');
      addOption(localGvtSelect, 'Oyigbo');
      addOption(localGvtSelect, 'Port Harcourt');
      addOption(localGvtSelect, 'Tai');
    } else if (selectedState === 'Sokoto') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Binji');
      addOption(localGvtSelect, 'Bodinga');
      addOption(localGvtSelect, 'Dange/Shuni');
      addOption(localGvtSelect, 'Gada');
      addOption(localGvtSelect, 'Goronyo');
      addOption(localGvtSelect, 'Gudu');
      addOption(localGvtSelect, 'Gwadabawa');
      addOption(localGvtSelect, 'Illela');
      addOption(localGvtSelect, 'Isa');
      addOption(localGvtSelect, 'Kebbe');
      addOption(localGvtSelect, 'Kware');
      addOption(localGvtSelect, 'Rabah');
      addOption(localGvtSelect, 'Sabon Birni');
      addOption(localGvtSelect, 'Shagari');
      addOption(localGvtSelect, 'Silame');
      addOption(localGvtSelect, 'Sokoto North');
      addOption(localGvtSelect, 'Sokoto South');
      addOption(localGvtSelect, 'Tambuwal');
      addOption(localGvtSelect, 'Tangaza');
      addOption(localGvtSelect, 'Tureta');
      addOption(localGvtSelect, 'Wamako');
      addOption(localGvtSelect, 'Wurno');
      addOption(localGvtSelect, 'Yabo');
    } else if (selectedState === 'Taraba') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Ardo-Kola');
      addOption(localGvtSelect, 'Bali');
      addOption(localGvtSelect, 'Donga');
      addOption(localGvtSelect, 'Gashaka');
      addOption(localGvtSelect, 'Gassol');
      addOption(localGvtSelect, 'Ibi');
      addOption(localGvtSelect, 'Jalingo');
      addOption(localGvtSelect, 'Karim Lamido');
      addOption(localGvtSelect, 'Kumi');
      addOption(localGvtSelect, 'Lau');
      addOption(localGvtSelect, 'Sardauna');
      addOption(localGvtSelect, 'Takum');
      addOption(localGvtSelect, 'Ussa');
      addOption(localGvtSelect, 'Wukari');
      addOption(localGvtSelect, 'Yorro');
      addOption(localGvtSelect, 'Zing');
    } else if (selectedState === 'Yobe') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Bade');
      addOption(localGvtSelect, 'Bursari');
      addOption(localGvtSelect, 'Damaturu');
      addOption(localGvtSelect, 'Fika');
      addOption(localGvtSelect, 'Fune');
      addOption(localGvtSelect, 'Geidam');
      addOption(localGvtSelect, 'Gujba');
      addOption(localGvtSelect, 'Gulani');
      addOption(localGvtSelect, 'Jakusko');
      addOption(localGvtSelect, 'Karasuwa');
      addOption(localGvtSelect, 'Machina');
      addOption(localGvtSelect, 'Nangere');
      addOption(localGvtSelect, 'Nguru');
      addOption(localGvtSelect, 'Potiskum');
      addOption(localGvtSelect, 'Tarmuwa');
      addOption(localGvtSelect, 'Yunusari');
      addOption(localGvtSelect, 'Yusufari');
    } else if (selectedState === 'Zamfara') {
      addOption(localGvtSelect, '');
      addOption(localGvtSelect, 'Anka');
      addOption(localGvtSelect, 'Bakura');
      addOption(localGvtSelect, 'Birnin Magaji/Kiyaw');
      addOption(localGvtSelect, 'Bukkuyum');
      addOption(localGvtSelect, 'Bungudu');
      addOption(localGvtSelect, 'Gummi');
      addOption(localGvtSelect, 'Gusau');
      addOption(localGvtSelect, 'Kaura Namoda');
      addOption(localGvtSelect, 'Maradun');
      addOption(localGvtSelect, 'Maru');
      addOption(localGvtSelect, 'Shinkafi');
      addOption(localGvtSelect, 'Talata Mafara');
      addOption(localGvtSelect, 'Chafe');
      addOption(localGvtSelect, 'Zurmi');
    }

    function addOption(selectElement, optionValue) {
      const option = document.createElement('option');
      option.value = optionValue;
      option.text = optionValue;
      selectElement.add(option);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      toast.error('Please add all field');
    } else {
      try {
        const res = await registerStudent({
          firstName,
          lastName,
          otherName,
          level,
          subLevel,
          dateOfBirth,
          gender,
          yearAdmitted,
          stateOfOrigin,
          localGvt,
          homeTown,
          sponsorName,
          sponsorRelationship,
          sponsorPhoneNumber,
          sponsorEmail,
          image,
        }).unwrap();
        if (res) {
          refetch();
          toast.success(
            `${res.firstName} ${res.lastName} registered successfully`
          );
          setFormData({
            firstName: '',
            lastName: '',
            otherName: '',
            level: '',
            subLevel: '',
            gender: '',
            dateOfBirth: '',
            yearAdmitted: '',
            stateOfOrigin: '',
            localGvt: '',
            homeTown: '',
            sponsorName: '',
            sponsorRelationship: '',
            sponsorPhoneNumber: '',
            sponsorEmail: '',
          });
          setImage(null);
          router.push(`/students/${res._id}`);
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  const clickedStudentBtn = () => {
    setIsStudentForm(!isStudentForm);
  };
  return (
    <div className='container mx-auto'>
      <button
        onClick={clickedStudentBtn}
        className={`${
          isStudentForm ? 'hidden' : 'block'
        } bg-blue-950 text-white px-4 py-2 rounded mt-4 mx-auto w-10/12`}
      >
        Register Student
      </button>
      <div
        className={`${
          isStudentForm ? 'block' : 'hidden'
        } bg-gray-100 p-6 rounded shadow-lg`}
      >
        <form onSubmit={onSubmit} className='space-y-4'>
          <h2 className='text-lg font-bold'>Register Student</h2>
          <div className='flex flex-col '>
            <label htmlFor='studentFirstName'>First Name</label>
            <input
              className='bg-gray-300 rounded px-4 py-1'
              type='text'
              name='firstName'
              id='studentFirstName'
              value={firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='studentLastName'>Last Name</label>
            <input
              type='text'
              name='lastName'
              id='studentLastName'
              value={lastName}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
              required
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='studentOtherName'>other Name</label>
            <input
              type='text'
              name='otherName'
              id='studentOtherName'
              value={otherName}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
              required
            />
          </div>

          <div className='flex flex-col '>
            <label htmlFor='selectStudentLevel'>Class</label>
            <select
              name='level'
              id='selectStudentLevel'
              className='bg-gray-300 rounded px-4 py-1'
              onChange={handleInputChange}
              required
            >
              <option value=''>Select Class</option>
              <option value='Creche'>Creche</option>
              <option value='Day Care'>Day Care</option>
              <option value='Reception'>Reception</option>
              <option value='Pre School'>Pre School</option>
              <option value='Pre KG'>Pre KG</option>
              <option value='KG'>KG</option>
              <option value='Grade 1'>Grade 1</option>
              <option value='Grade 2'>Grade 2</option>
              <option value='Grade 3'>Grade 3</option>
              <option value='Grade 4'>Grade 4</option>
              <option value='Grade 5'>Grade 5</option>
              <option value='JSS 1'>JSS 1</option>
              <option value='JSS 2'>JSS 2</option>
              <option value='JSS 3'>JSS 3</option>
              <option value='SSS 1'>SSS 1</option>
              <option value='SSS 2'>SSS 2</option>
              <option value='SSS 3'>SSS 3</option>
            </select>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='subLevel'>Sub Class</label>
            <select
              name='subLevel'
              id='subLevel'
              className='bg-gray-300 rounded px-4 py-1'
              onChange={handleInputChange}
              required
            >
              <option value=''>Select sub class category</option>
              <option value='A'>A</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
              <option value='D'>D</option>
            </select>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='stdGender'>Gender</label>
            <select
              name='gender'
              id='stdGender'
              className='bg-gray-300 rounded px-4 py-1'
              onChange={handleInputChange}
              required
            >
              <option value=''>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>

          <div className='flex flex-col '>
            <label htmlFor='studentdateOfBirth'>Date Of Birth</label>
            <input
              type='date'
              name='dateOfBirth'
              placeholder='DD/MM/YYYY'
              id='studentdateOfBirth'
              value={dateOfBirth}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
              required
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='studentYearAdmitted'>Year Admitted</label>
            <input
              type='date'
              name='yearAdmitted'
              placeholder='Enter the session Admitted eg(2017/2018)'
              id='studentYearAdmitted'
              value={yearAdmitted}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
            />
          </div>

          <div className='flex flex-col '>
            <label htmlFor='studentStateOfOrigin'>State Of Origin</label>
            <select
              name='stateOfOrigin'
              id='studentStateOfOrigin'
              className='bg-gray-300 rounded px-4 py-1'
              onChange={handleStateChange}
              required
            >
              <option value=''></option>
              <option value='Abia'>Abia</option>
              <option value='Adamawa'>Adamawa</option>
              <option value='Akwa Ibom'>Akwa Ibom</option>
              <option value='Anambra'>Anambra</option>
              <option value='Bauchi'>Bauchi</option>
              <option value='Bayelsa'>Bayelsa</option>
              <option value='Benue'>Benue</option>
              <option value='Borno'>Borno</option>
              <option value='Cross River'>Cross River</option>
              <option value='Delta'>Delta</option>
              <option value='Ebonyi'>Ebonyi</option>
              <option value='Edo'>Edo</option>
              <option value='Ekiti'>Ekiti</option>
              <option value='Enugu'>Enugu</option>
              <option value='Gombe'>Gombe</option>
              <option value='Imo'>Imo</option>
              <option value='Jigawa'>Jigawa</option>
              <option value='Kaduna'>Kaduna</option>
              <option value='Kano'>Kano</option>
              <option value='Katsina'>Katsina</option>
              <option value='Kebbi'>Kebbi</option>
              <option value='Kogi'>Kogi</option>
              <option value='Kwara'>Kwara</option>
              <option value='Lagos'>Lagos</option>
              <option value='Nasarawa'>Nasarawa</option>
              <option value='Niger'>Niger</option>
              <option value='Ogun'>Ogun</option>
              <option value='Ondo'>Ondo</option>
              <option value='Osun'>Osun</option>
              <option value='Oyo'>Oyo</option>
              <option value='Plateau'>Plateau</option>
              <option value='Rivers'>Rivers</option>
              <option value='Sokoto'>Sokoto</option>
              <option value='Taraba'>Taraba</option>
              <option value='Yobe'>Yobe</option>
              <option value='Zamfara'>Zamfara</option>
            </select>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='localGvt'>Local Government</label>
            <select
              name='localGvt'
              id='localGvt'
              className='bg-gray-300 rounded px-4 py-1'
              onChange={handleInputChange}
              required
            ></select>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='stdHomeTown'>Home Town</label>
            <input
              type='text'
              name='homeTown'
              id='stdHomeTown'
              value={homeTown}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='sponsorName'>Sponsor Name</label>
            <input
              type='text'
              name='sponsorName'
              placeholder='Enter sponsor full name'
              id='sponsorName'
              value={sponsorName}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='sponsorRelationship'>
              Relationship With Sponsor
            </label>
            <select
              name='sponsorRelationship'
              id='sponsorRelationship'
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
            >
              <option value=''></option>
              <option value='Father'>Father</option>
              <option value='Mother'>Mother</option>
              <option value='Uncle'>Uncle</option>
              <option value='Aunty'>Aunty</option>
              <option value='Sister'>Sister</option>
              <option value='Brother'>Brother</option>
              <option value='Guardian'>Guardian</option>
              <option value='Scholarship'>Scholarship</option>
              <option value='Friend'>Friend</option>
              <option value='Self Sponsored'>Self Sponsored</option>
            </select>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='sponsorPhoneNumber'>Sponsor Phone Number</label>
            <input
              type='number'
              name='sponsorPhoneNumber'
              placeholder='Enter sponsor full name'
              id='sponsorPhoneNumber'
              value={sponsorPhoneNumber}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='sponsorEmail'>Sponsor Email Address</label>
            <input
              type='email'
              name='sponsorEmail'
              placeholder='Enter sponsor email address'
              id='sponsorEmail'
              value={sponsorEmail}
              onChange={handleInputChange}
              className='bg-gray-300 rounded px-4 py-1'
            />
          </div>
          <div className='flex flex-col '>
            <label htmlFor='studentPassport'>Upload Student Passport</label>
            <input type='file' accept='image/*' onChange={handleImageChange} />
          </div>
          {isLoading ? (
            <Spinner clip={true} size={25} />
          ) : (
            <>
              <button
                className='bg-blue-950 text-white px-2 py-1 rounded'
                type='submit'
              >
                submit
              </button>
              <button
                onClick={clickedStudentBtn}
                className='bg-orange-500 text-white px-2 py-1 rounded ml-4'
                type='button'
              >
                Close
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default addStudent;
