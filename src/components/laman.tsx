import { Button, Container, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material";
import StarIcon from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material";
import Page from "../components/layout/Page";
import HeroSection from "../components/HeroSection";
import React from "react";
import FeatureContainer from "../components/FeatureContainer";
import FeatureBlocksContainer from "../components/FeatureBlocksContainer";
import FeatureBlock from "../components/FeatureBlock";
import BigSection from "../components/BigSection";
// import CompaniesSection from "../components/CompaniesSection";
// import Image from "next/image";
import Filling from "./fillform";
import TestimonialSection from "../components/TestimonialSection";
import { testimonials } from "./data/testimonials";
import ContactSection from "../components/ContactSection";
import { Ballot, Business, CalendarToday, HomeMini, WhatsApp } from "@mui/icons-material";

const WaText = "Hallo";
const WaPhone = "6285292609771";
const Walink = "https://wa.me/"+WaPhone+"/?text="+WaText;

export default function HomePage(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <HeroSection
        title="Terapi Totok 431"
        subtitle="Tidak ada penyakit yang tidak ada obatnya, Insyaallah sembuh Dengan Izin ALLOH "
        image="/assets/totok1.svg"
      >
        {/* <Link href="/react" passHref> */}
        <Button variant="contained" href={Walink} disableElevation sx={{ mr: 2, mt: 2 }}>
          Hubungi Kami  <WhatsApp></WhatsApp>
        </Button>
        {/* </Link> */}
        {/* <Link href="/ios" passHref> */}
        <Button href="/page2" disableElevation sx={{ mr: 2, mt: 2 }}>
          Informasi
        </Button>
        {/* </Link> */}
      </HeroSection>
      <div> <br></br></div>
      {/* <CompaniesSection companies={null} /> */}
      <FeatureContainer>
       
          <FeatureBlock
            title="Membantu Penyembuhan"
            icon={<Ballot />}
            content={
              <>   
             <div> Saraf    Syaraf Tulang Belakang, Sakit Sendi, Asam Urat, Lambung, Migren, Fertigo, Lemah Jantung, Dada Sering Sakit, Asma, Tangan dan Kaki sakit digerakkan, Ambeyen dll.</div>
              </>
            }
          />
          <FeatureBlock
            title="Jadwal Buka"
            icon={<CalendarToday />}
            content={
              <>                            
              <div> Senin, Rabo, Sabtu.</div>
                
              </>
            }
          />
          <FeatureBlock
            title="Datang langsung ke"
            icon={<Business />}
            content={
              <>
              Alamat : xxxxxxxxxxxxxx

              </>
            }
          />
        
      </FeatureContainer>
      <BigSection
        title="Terapi pertama GERATIS"
       subtitle="Kedua dan seterusnya : Sukarela / Seikhlasnya"
      />
      <Container sx={{ display: "flex", justifyContent: "center", mb: 10 }}>
        
      </Container>
      <Box sx={{ mb: 4 }}>
        <BigSection
          title="Testimoni Pasien"
          subtitle="____________________"
        />
      </Box>
      <Box sx={{ mb: 8 }}>
        <TestimonialSection testimonials={testimonials} />
      </Box>
      <Box sx={{ mb: 8 }}>
        <ContactSection />
      </Box>
      <Container>
      <Box sx={{ mb: 4 }}>
          <Filling/>
      </Box>
      </Container>
    </Page>
  );
}
