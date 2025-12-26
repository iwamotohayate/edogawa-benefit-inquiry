// pages/index.js
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Text, Input, Button, Loading } from "@nextui-org/react";
import styles from '@/styles/Home.module.css'

export default function Home({ }) {
  const router = useRouter()
  const [benefitCode, setBenefitCode] = useState("");
  const [isFinding, setIsFinding] = useState(false);

  return (
    <main className={`${styles.main}`}>
        <div className={`${styles.titel}`}>
          <Text b size="26px" color="#565565">江戸川区</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#565565">住民税非課税世帯等給付金</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#6a5acd" >【受付状況確認】</Text>
        </div>
      <Card css={{ mt: "36px", mw: "400px", bg: "aliceblue" }}>
        <Card.Body>
          <Text b size="18px" color="#565565">申請書番号（15桁・半角）を入力し</Text>
          <Text b size="18px" color="#565565">「照会」ボタンをクリックして下さい。</Text>
          <div className={styles.search}>
            <Input
              clearable
              underlined
              labelPlaceholder="申請書番号"
              initialValue=""
              onChange={
                (e) => setBenefitCode(e.target.value)
              }
            />
            <Button color="primary" auto shadow
              onClick={() => {
                setIsFinding(true);
                router.push({pathname:'/benefit', query: {benefitcode :benefitCode,mode:1}});
              }}
              disabled={isFinding || benefitCode.length !== 15}
            >
              <Text color="currentColor" css={{ d: isFinding ? "none" : "block" }}>照会</Text>
              <Loading color="currentColor" size="sm" css={{ d: isFinding ? "block" : "none" }}/>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </main>
  );
}

export async function getStaticProps() {
  return { props: { } };
}