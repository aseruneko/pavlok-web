import { useState } from "preact/hooks";

export default function Pavlok() {
  const [beepLevel, setBeepLevel] = useState(50);
  const [vibeLevel, setVibeLevel] = useState(50);
  const [zapLevel, setZapLevel] = useState(50);
  const [status, setStatus] = useState(
    "With great power comes great responsibility."
  );

  return (
    <div class="main">
      <div class="title">aserunekoのpavlok</div>
      <div class="rows">
        <div class="status">{status}</div>
        <div class="row">
          <input
            type="range"
            id="beepLevel"
            min="0"
            max="100"
            value={beepLevel}
            onInput={(e) => {
              setBeepLevel(parseInt(e.currentTarget.value));
            }}
          />
          <span>{beepLevel}</span>
          <button
            type="button"
            onClick={async () => {
              setStatus("Sending the stimulate...");
              setStatus(await stimulate("beep", beepLevel));
            }}
          >
            🔔BEEP🔔
          </button>
        </div>
        <div class="row">
          <input
            type="range"
            id="vibeLevel"
            min="0"
            max="100"
            value={vibeLevel}
            onInput={(e) => {
              setVibeLevel(parseInt(e.currentTarget.value));
            }}
          />
          <span>{vibeLevel}</span>
          <button
            type="button"
            onClick={async () => {
              setStatus("Sending the stimulate...");
              setStatus(await stimulate("vibe", vibeLevel));
            }}
          >
            🫨VIBE🫨
          </button>
        </div>
        <div class="row">
          <input
            type="range"
            id="zapLevel"
            min="0"
            max="100"
            value={zapLevel}
            onInput={(e) => {
              setZapLevel(parseInt(e.currentTarget.value));
            }}
          />
          <span>{zapLevel}</span>
          <button
            type="button"
            onClick={async () => {
              setStatus("Sending the stimulate...");
              setStatus(await stimulate("zap", zapLevel));
            }}
          >
            ⚡️ZAP⚡️
          </button>
        </div>
      </div>
      <p class="warn">※zapは50で割と痛いです</p>
    </div>
  );
}

async function stimulate(stimulusType: string, stimulusValue: number) {
  const response = await fetch(`/api/${stimulusType}`, {
    method: "POST",
    headers: {
      accpet: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      value: stimulusValue,
    }),
  });
  if (response.status !== 200) {
    return "Something went wrong.";
  } else {
    return `${stimulusType} has been set at LV${stimulusValue} @ ${getTime()}`;
  }
}

function getTime() {
  const timestamp = Date.now(); // 現在のタイムスタンプ（ミリ秒）を取得
  const date = new Date(timestamp); // タイムスタンプからDateオブジェクトを作成

  // 日本語形式で表示する（例：2024年12月25日 10時30分）
  const year = date.getFullYear(); // 年
  const month = date.getMonth() + 1; // 月 (0から始まるので+1)
  const day = date.getDate(); // 日
  const hours = date.getHours(); // 時
  const minutes = date.getMinutes(); // 分

  return `${year}年${month}月${day}日 ${hours}時${minutes}分`;
}
