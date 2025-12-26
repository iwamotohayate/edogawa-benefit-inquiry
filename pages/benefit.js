import { useRouter } from 'next/router'
import { Link, Button, Card, Text, Row } from "@nextui-org/react";
import styles from '@/styles/Home.module.css'

export default function benefit({ benefitInfo,mode }) {
  const router = useRouter();
  if (!benefitInfo.error){
    return (
      <main className={`${styles.main}`}>
        <div className={`${styles.titel}`}>
          <Text b size="26px" color="#565565">〇〇市</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#565565">〇〇・✕✕・△△等</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#565565">価格高騰重点支援給付金</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#6a5acd" >【受付状況確認】</Text>
        </div>
        <Card css={{ mt: "36px", mw: "400px", bg: "aliceblue" }}>
          <Card.Header>
            <Text b size="$xl" color="#565565">申請書番号：{benefitInfo.benefit_code}</Text>
            {/* <Text b size="$xl" color="#565565">お問い合わせ番号：{benefitInfo.benefit_code}</Text> */}
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text b css={{ mb:"16px", pl: "8px", py: "4px", bc: "limegreen", color: "white", br: "5px" }} size="$xl">処理状況</Text>
            <Text b css={{ pl: "8px"}} size="$xl" color="#565565"> {benefitInfo.message1}</Text>
            <Text b css={{ pl: "8px"}} size="$xl" color="#565565"> {benefitInfo.message2}</Text>
            <Text b css={{ pl: "8px"}} size="$xl" color="#565565"> {benefitInfo.message3}</Text>
            <Text b css={{ pl: "8px"}} size="$xl" color="#1a0dab"><a href={benefitInfo.link} target="_blank" rel="noopener noreferrer">{benefitInfo.message4}</a></Text>
           
            <Text b css={{ mt: "16px", pl: "8px", py: "4px", bc: "limegreen", color: "white", br: "5px" }} size="$xl"
              style={{ display:benefitInfo.transfer_scheduled_date!=undefined && benefitInfo.transfer_scheduled_date !="" ? "" : "none" }}
            >お振込み予定日</Text>
            <Text b css={{ pl: "8px"}} size="$xl" color="#565565"
              style={{ display:benefitInfo.transfer_scheduled_date!=undefined && benefitInfo.transfer_scheduled_date !="" ? "" : "none" }}
            > {benefitInfo.transfer_scheduled_date}</Text>
           
            <Text b css={{ mt: "16px", pl: "8px", py: "4px", bc: "limegreen", color: "white", br: "5px" }} size="$xl"
              style={{ display: benefitInfo.transfer_date!=undefined && benefitInfo.transfer_date!="" ? "" : "none" }}
            >お振込み日</Text>
            <Text b css={{ pl: "8px"}} size="$xl" color="#565565"
              style={{ display: benefitInfo.transfer_date!=undefined && benefitInfo.transfer_date!="" ? "" : "none" }}
            > {benefitInfo.transfer_date}</Text>
            
            {/* <Text b size="$xl" css={{ mt: "16px",ta: "end"}} color="#565565">最終更新日：{benefitInfo.update_date}</Text> */}
          </Card.Body>
          <Card.Footer>
          <Row justify="flex-end">
              <Button size="sm" color="primary"
                onClick={() => router.back()}
                style={{ display: mode == 1 ? "" : "none" }}
                className={`${styles.button}`}
              >
                戻る
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </main>
    )
  }else{
    return(
      <main className={`${styles.main}`}>
        <div className={`${styles.titel}`}>
          <Text b size="26px" color="#565565">〇〇市</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#565565">〇〇・✕✕・△△等</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#565565">価格高騰重点支援給付金</Text>
        </div>
        <div className={`${styles.titel}`}>
         <Text b size="26px" color="#6a5acd" >【受付状況確認】</Text>
        </div>
        <Card css={{mt: "36px", mw: "400px", bg: "aliceblue" }}>
          <Card.Header>
            <Text b size="$xl" color="#565565">申請書番号：{benefitInfo.benefit_code}</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text b size="$xl" color="#565565">対象の給付申請が見つかりませんでした。</Text>
            {/* <Text b size="$xl" color="#565565">再度番号をご確認の上、照会を行ってください。</Text> */}
            <Text b size="$xl" color="#565565">申請書番号をご確認の上、照会を行ってください。</Text>
          </Card.Body>
          <Card.Footer>
          <Row justify="flex-end">
              <Button size="sm" color="primary"
                onClick={() => router.back()}
                style={{ display: mode == 1 ? "" : "none" }}
              >
                戻る
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </main>
    )
  }
}

function toUpperCaseAndHalfWidth(str) {
  // 全角英数字を半角に変換するためのマップ
  const fullWidthToHalfWidthMap = {
      '０': '0', '１': '1', '２': '2', '３': '3', '４': '4',
      '５': '5', '６': '6', '７': '7', '８': '8', '９': '9',
      'Ａ': 'A', 'Ｂ': 'B', 'Ｃ': 'C', 'Ｄ': 'D', 'Ｅ': 'E',
      'Ｆ': 'F', 'Ｇ': 'G', 'Ｈ': 'H', 'Ｉ': 'I', 'Ｊ': 'J',
      'Ｋ': 'K', 'Ｌ': 'L', 'Ｍ': 'M', 'Ｎ': 'N', 'Ｏ': 'O',
      'Ｐ': 'P', 'Ｑ': 'Q', 'Ｒ': 'R', 'Ｓ': 'S', 'Ｔ': 'T',
      'Ｕ': 'U', 'Ｖ': 'V', 'Ｗ': 'W', 'Ｘ': 'X', 'Ｙ': 'Y',
      'Ｚ': 'Z'
  };

  // 変換処理
  let result = '';
  for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      // 全角文字を半角に変換
      if (fullWidthToHalfWidthMap[char]) {
          char = fullWidthToHalfWidthMap[char];
      }
      // 小文字を大文字に変換
      result += char.toUpperCase();
  }
  return result;
}


function convertToReiwaFormat(dateString) {
  // 入力形式: "YYYY年M月D日"
  const regex = /(\d{4})年(\d{1,2})月(\d{1,2})日/;
  const match = dateString.match(regex);

  if (!match) {
    // 日付の形式が正しくない場合、ブランクを返す
    return "";
  }

  const [_, year, month, day] = match.map(Number);

  // 令和の年を計算 (令和は2019年5月1日から)
  const reiwaYear = year - 2018;

  // 令和元年の特別な表記に対応
  const reiwaYearDisplay = reiwaYear === 1 ? "元" : reiwaYear;

  return `令和${reiwaYearDisplay}年${month}月${day}日`;
}

// サーバーサイドレンダリング
export const getServerSideProps = async (context) => {
  const benefitcode = toUpperCaseAndHalfWidth(context.query.benefitcode);
  const res = await searchBenefit(benefitcode);
  if (res.Item) {
    if (res.Item.status === "未処理") {
      res.Item.message1 = "〇〇市にてお振込みの準備をしております。"
      res.Item.message2 = "お振込みまで、概ね2週間のお時間をいただいています。"
      res.Item.message3 = "しばらくお待ちください。"
      // 入金予定日・入金日を表示しない
      res.Item.transfer_scheduled_date = ""
      res.Item.transfer_date = ""
    }
    if (res.Item.status === "不着") {
      res.Item.message1 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
      res.Item.message2 = ""
      res.Item.message3 = ""
      // 入金予定日・入金日を表示しない
      res.Item.transfer_scheduled_date = ""
      res.Item.transfer_date = ""
    }
    if (res.Item.status === "受付済") {
      res.Item.message1 = "〇〇市にてお振込みの手続き中です。"
      res.Item.message2 = "お振込みまで、概ね2週間のお時間をいただいています。"
      res.Item.message3 = "しばらくお待ちください。"
      // 入金予定日・入金日を表示しない
      res.Item.transfer_scheduled_date = ""
      res.Item.transfer_date = ""
    }
    if (res.Item.status === "内容確認中") {
        res.Item.message1 = "〇〇市にてお振込みの手続き中です。"
        res.Item.message2 = "お振込みまで、概ね2週間のお時間をいただいています。"
        res.Item.message3 = "しばらくお待ちください。"
        // 入金予定日・入金日を表示しない
        res.Item.transfer_scheduled_date = ""
        res.Item.transfer_date = ""
      }
      if (res.Item.status === "不備連絡中") {
          res.Item.message1 = "〇〇市にて手続きを進めておりますが、お送りいただいた内容に不備がございます。"
          res.Item.message2 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
          res.Item.message3 = ""
          // 入金予定日・入金日を表示しない
          res.Item.transfer_scheduled_date = ""
          res.Item.transfer_date = ""
        }
        if (res.Item.status === "承認待ち") {
          res.Item.message1 = "〇〇市にてお振込みの手続き中です。"
          res.Item.message2 = "お振込みまで、概ね2週間のお時間をいただいています。"
          res.Item.message3 = "しばらくお待ちください。"
          // 入金予定日・入金日を表示しない
          res.Item.transfer_scheduled_date = ""
          res.Item.transfer_date = ""
        }
        if (res.Item.status === "不支給承認待ち") {
          res.Item.message1 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
          res.Item.message2 = ""
          res.Item.message3 = ""
          // 入金予定日・入金日を表示しない
          res.Item.transfer_scheduled_date = ""
          res.Item.transfer_date = ""
        }
        if (res.Item.status === "入金作成待ち") {
          res.Item.message1 = "〇〇市にてお振込みの手続き中です。"
          res.Item.message2 = "お振込みまで、概ね2週間のお時間をいただいています。"
          res.Item.message3 = "しばらくお待ちください。"
          // 入金予定日・入金日を表示しない
          res.Item.transfer_scheduled_date = ""
          res.Item.transfer_date = ""
        }
        if (res.Item.status === "入金エラー") {
          res.Item.message1 = "〇〇市にてお振込みいたしましたが、ご指定の口座にお振込みできませんでした。"
          res.Item.message2 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
          res.Item.message3 = ""
          // 入金予定日・入金日を表示しない
          res.Item.transfer_scheduled_date = ""
          res.Item.transfer_date = ""
        }
        if (res.Item.status === "入金作成済み") {
          res.Item.message1 = "〇〇市にてお振込みの準備ができました。"
        res.Item.message2 = "お振込み日以降にご指定いただいた口座をご確認ください。"
        res.Item.message3 = ""
        // 入金日を表示しない
        res.Item.transfer_date = ""
      }
      if (res.Item.status === "決定通知済み") {
        res.Item.message1 = "〇〇市にてお振込みの準備ができました。"
        res.Item.message2 = "お振込み日以降にご指定いただいた口座をご確認ください。"
        res.Item.message3 = ""
        // 入金日を表示しない
        res.Item.transfer_date = ""
      }
      if (res.Item.status === "キャンセル") {
        res.Item.message1 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
        res.Item.message2 = ""
        res.Item.message3 = ""
        // 入金予定日・入金日を表示しない
        res.Item.transfer_scheduled_date = ""
        res.Item.transfer_date = ""
      }
      if (res.Item.status === "不支給") {
        res.Item.message1 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
        res.Item.message2 = ""
        res.Item.message3 = ""
        // 入金予定日・入金日を表示しない
        res.Item.transfer_scheduled_date = ""
        res.Item.transfer_date = ""
      }
      if (res.Item.status === "不支給完了") {
        res.Item.message1 = "コールセンター（XXX-XXX-XXX）にご連絡ください。"
        res.Item.message2 = ""
        res.Item.message3 = ""
        // 入金予定日・入金日を表示しない
        res.Item.transfer_scheduled_date = ""
        res.Item.transfer_date = ""
      }
      if (res.Item.status === "入金完了") {
        res.Item.message1 = "〇〇市にてお振込みいたしました。"
        res.Item.message2 = "ご指定いただいた口座をご確認ください。"
        res.Item.message3 = ""
        // 入金予定日を表示しない
        res.Item.transfer_scheduled_date = ""
      }
      //ステータスにかかわらず緊急停止ONの場合優先される
      // if(res.Item.emergency_stop === "true"){
      //   res.Item.message1 = "コールセンターまでお問い合わせください。"
      //   res.Item.message2 = ""
      //   res.Item.message3 = ""
      //   // 入金予定日・入金日を表示しない
      //   res.Item.transfer_scheduled_date = ""
      //   res.Item.transfer_date = ""
      // }
    }
    return {
      props: {
        benefitInfo: res.Item ? res.Item : {benefit_code: benefitcode, error: true},
        mode: context.query.mode ? context.query.mode : null
      }
    };
  };

// 給付申請情報取得
const searchBenefit = async (benefitcode) => {
  const apiUrl = process.env.BENEFIT_API_URL;
  const apiKey = process.env.BENEFIT_API_KEY;
  const data = { 'benefitCode': benefitcode};
  const response = await fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  console.log(res)
  return res;
}