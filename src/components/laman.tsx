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
import TestimonialSection from "../components/TestimonialSection";
import { testimonials } from "./data/testimonials";
import ContactSection from "../components/ContactSection";
import { Ballot, Business, CalendarToday, HomeMini, WhatsApp } from "@mui/icons-material";
import scrollIntoView from 'scroll-into-view-if-needed'
import FeatureGridContainer from "./FeatureGridContainer";
import ImageBlock from "./ImageBlock";

export default function HomePage(): JSX.Element {
  return (
    <Page maxWidth={false}>
      <HeroSection
        title="Terapi Totok 431"
        subtitle="Tidak ada penyakit yang tidak ada obatnya, Insyaallah sembuh Dengan Izin ALLAH "
        image="/assets/totok1.svg"
      >
        {/* <Link href="/react" passHref> */}
        
        <Button variant="contained" onClick={function(){
          const node = document.getElementById('formpesan')!;
          scrollIntoView(node, {
            behavior: 'smooth',
            scrollMode: 'if-needed',
          });
        }} disableElevation sx={{ mr: 2, mt: 2 }}>
          Hubungi Kami  <WhatsApp></WhatsApp>
        </Button>
        {/* </Link> */}
        {/* <Link href="/ios" passHref> */}
       
        {/* </Link> */}
      </HeroSection>
      <div> <br></br></div>
      {/* <CompaniesSection companies={null} /> */}
      <FeatureContainer>
       
          <FeatureBlock
            title="Membantu Penyembuhan"
            // icon={<Ballot />}
            content={
              <>   
            
              </>
            }
            
          />

          <FeatureBlocksContainer>
          <ImageBlock
            title="Saraf"
            image="/assets/penyakit/saraf.jpeg"
          />
          <ImageBlock
            title="Syaraf Tulang Belakang"
            image="/assets/penyakit/tb.jpg"
          />
          <ImageBlock
            title="Sakit Sendi"
            image="/assets/penyakit/sendi.jpg"
          />
          <ImageBlock
            title="Asam Urat"
            image="/assets/penyakit/asam_urat.png"
          />
          <ImageBlock
            title="Lambung"
            image="/assets/penyakit/lambung.jpg"
          />
          <ImageBlock
            title="Migrain"
            image="/assets/penyakit/migrain.jpeg"
          />
          <ImageBlock
            title="Vertigo"
            image="/assets/penyakit/vertigo.jpg"
          />
          <ImageBlock
            title="Lemah Jantung"
            image="/assets/penyakit/lemahjantung.jpg"
          />
          <ImageBlock
            title="Asma"
            image="/assets/penyakit/asma.jpg"
          />
          <ImageBlock
            title="Ambeyen"
            image="/assets/penyakit/ambeyen.jpg"
          />

          </FeatureBlocksContainer>
         
          <FeatureBlock
            title="Jadwal Terapi"
            // icon={<CalendarToday />}
            content={
              <>                            
              <div> Senin & Sabtu: Ruko Pasar Puro di bawah lampu Lip/Lop</div>
              <div> Kamis: Pilangsari Kantin Masjid Basis</div>  
              <div> Minggu: Glongong Barat SMP 1 Gondang 300 M</div>  
              </>
            }
          />
          {/* <FeatureBlock
            title="Datang langsung ke"
            // icon={<Business />}
            content={
              <>
              Alamat : Ruko Pasar Puro Di Bawah Lampu Lip Lop/ Lampu Emergency

              </>
            }
          /> */}
        
      </FeatureContainer>
      <BigSection
        title="Terapi pertama Gratis"
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
      
    </Page>
  );
}
