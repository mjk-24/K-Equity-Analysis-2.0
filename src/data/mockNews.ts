import { NewsItem } from '../types';

export const mockNews: NewsItem[] = [
  {
    id: 'kospi-6300',
    title: 'KOSPI Continues to Break Record Highs, Reaching 6300 Points',
    title_ko: '코스피 사상 최고치 경신 지속, 6300포인트 도달',
    source: 'K-Equity Analysis',
    time: 'Just now',
    category: 'Market',
    date: 'Mar 11, 2026',
    content: `
KOSPI reached a new all-time high today, passing the 6300-point mark just a day after passing the 6000-point threshold. NVIDIA’s earnings surprise pushed Samsung Electronics (KRX: 005930) and SK Hynix (KRX: 000660), which in total account for nearly 40% of KOSPI’s market cap, to record levels.

After its inaugural year back in 1980, KOSPI first reached the 1000-point level in 1989, supported by strong export-led economic growth and a rapidly industrializing society. It suffered from the Asian financial crisis in 1997, which caused widespread unemployment and social unrest. Rebounding after the crash, it reached the 2000-point level for the first time in 2007 just before the Great Recession. The index remained boxed between 2000 and 3000 points until last year, when the newly formed government under President Lee proclaimed structural reforms to take place to boost stock market democratization and a shift in wealth from the overheated real estate market to the financial sector. From then, KOSPI began its historical run, punching through 4000, 5000, and 6000 points at an increasing pace. At the point of writing, KOSPI is by far the most rapidly expanding major stock INDEX in the world with an YTD performance of around 41%, while Japan follows next with a 13% YTD performance.

Besides Samsung Electronics and SK Hynix, KOSPI has experienced a change in sentiment across multiple sectors. The robotics and AI infrastructure sector which includes car manufacturing giants like Hyundai Motor Co (KRX: 005380), traditional manufacturing industries like shipbuilding and gas turbine companies, along with financial services companies has provided a fair share of support for the index.

As KOSPI continues to make history every passing day with strong EPS growth and a willing government, it would be important to keep a keen eye on any sources of volatility abroad or reduced liquidity across the global market.
    `,
    content_ko: `
코스피가 6000포인트 문턱을 넘은 지 불과 하루 만에 6300포인트를 돌파하며 오늘 새로운 사상 최고치를 기록했습니다. 엔비디아(NVIDIA)의 어닝 서프라이즈는 코스피 시가총액의 약 40%를 차지하는 삼성전자(KRX: 005930)와 SK하이닉스(KRX: 000660)를 기록적인 수준으로 끌어올렸습니다.

1980년 출범 이후, 코스피는 강력한 수출 주도형 경제 성장과 급격한 산업화에 힘입어 1989년 처음으로 1000포인트 수준에 도달했습니다. 1997년 아시아 금융 위기로 광범위한 실업과 사회적 불안을 겪기도 했습니다. 폭락 이후 반등하여 대침체 직전인 2007년 처음으로 2000포인트 수준에 도달했습니다. 지수는 작년까지 2000포인트에서 3000포인트 사이에 갇혀 있었으나, 새로 출범한 이 대통령 정부가 주식 시장 민주화를 촉진하고 과열된 부동산 시장에서 금융 섹터로 부를 이동시키기 위한 구조적 개혁을 선포하면서 변화가 시작되었습니다. 그때부터 코스피는 역사적인 질주를 시작하여 4000, 5000, 6000포인트를 점점 더 빠른 속도로 돌파했습니다. 집필 시점 현재, 코스피는 연초 대비(YTD) 약 41%의 성과를 보이며 세계에서 가장 빠르게 확장하는 주요 주식 지수이며, 일본이 13%의 YTD 성과로 그 뒤를 잇고 있습니다.

삼성전자와 SK하이닉스 외에도 코스피는 여러 섹터에서 심리 변화를 경험했습니다. 현대자동차(KRX: 005380)와 같은 자동차 제조 거인, 조선 및 가스 터빈 회사와 같은 전통적인 제조 산업, 그리고 금융 서비스 회사들이 포함된 로봇 및 AI 인프라 섹터가 지수 상승에 상당한 기여를 했습니다.

강력한 EPS 성장과 정부의 의지로 코스피가 매일 역사를 써 내려가고 있는 만큼, 해외의 변동성 요인이나 글로벌 시장 전반의 유동성 감소에 대해 예리한 시선을 유지하는 것이 중요할 것입니다.
    `,
  },
  {
    id: 'yongin-cluster',
    title: 'Yongin Semiconductor Cluster: The Bet on the Future of Korea',
    title_ko: '용인 반도체 클러스터: 한국의 미래를 건 승부',
    source: 'K-Equity Analysis',
    time: '1 hour ago',
    category: 'Market',
    date: 'Mar 21, 2026',
    content: `
The Yongin Semiconductor Cluster project is regarded as singlehandedly the largest industrial project in South Korean history. Planned to be constructed in the city of Yongin, this 1,000 trillion Won project is led by Samsung and SK Hynix, the leading memory semiconductor producers in the world. Investing around 400 trillion Won and 600 trillion won respectively, this project is viewed as a venture that could determine the future of South Korea’s global competitiveness.

Gyeonggi-do, the province where the city of Yongin is located, has been the center of the South Korean semiconductor industry since its beginnings. Nearly all of Samsung and SK Hynix’s fabs are in the province, alongside countless companies that are involved in the process of semiconductor production. From Lam Research to ASML, vital suppliers of semiconductor equipment reside in the area. This project is expected to elevate South Korea as not just a region where semiconductor-related products are sold, but where active R&D is undertaken. There is national-level support being provided in this undertaking, with Samsung’s semiconductor cluster being selected as a National Industrial Complex, which comes with rapid regulatory approvals and subsidized energy supply.

Semiconductor fabs require a stable electricity supply as they are directly connected to the yield rate. This requires huge investments in electricity infrastructure as well as a nationwide effort to supply the necessary capacity to run multiple fabs at once. The concern for electricity has been raised, as it is estimated to require around 16GW of electricity. This is equivalent to the electricity production of around 16 nuclear power plants and is expected to take up nearly all of the Seoul metropolitan area’s energy demand. While 4.5GW of supply is expected to be produced within the cluster, the remaining 11.5GW would partially have to be pulled from electricity generated in other areas of the country. This means new power grid infrastructure must be built, passing through areas which do not directly benefit from this project. Being able to convince the local governments and their population is posed as a challenge.

![Semiconductor Fab](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600)

In the 6 fabs planned to be built by Samsung, production facilities for both memory semiconductors and foundry services are expected to be included. Compared to this, SK Hynix is focusing its finances on building next-generation memory semiconductors. This wave of investment in production capabilities can be seen as a response to the recent super-cycle in the semiconductor industry. Given the cyclical nature of the semiconductor industry, one might raise concerns regarding a potential downcycle that might damage the profitability of semiconductor producers, who, like Samsung and SK Hynix, are investing heavily in increasing capacity.

The cyclical nature of the semiconductor industry arises from producers having a high fixed cost, which exposes them to any fluctuations in price, both up and down. Taking the historical level of semiconductor companies globally, it can be deduced that most view the AI-driven super-cycle to last longer than most expect. However, if this forecast turns out to be erroneous, semiconductor mega-caps can expect profitability to take a dive, as they have in the past. Historically, the semiconductor cycle lasted for about 3-4 years. The current cycle can be argued to have begun back in 2024, and some expect it to last until 2027-2028. Given the current trajectory of investments in AI and related infrastructure, some might argue that this cycle is different, potentially lasting longer than previous cycles. From a supply-side perspective, the current bottleneck in semiconductor production and rising prices make it seem like capacity expansion is the logical choice, and in the long run, current investments will prove beneficial. Yet, any weakening in demand from AI hyperscalers or AI startups can shake the market and bring prices down. Now the critical issue lies in demand and not supply.

Regardless of short-term fluctuations in demand and prices, over the long run, investments in fabs and production capacity remain not just an economical choice, but a geopolitically strategic one as the economy moves from overly software-focused to more hardware-focused. Recent trends show that self-sufficiency of an economy has become more important than ever. From Trump 1.0, we could see signs of a detachment from globalization to a more multipolar world where friends and foes were defined more clearly. With the Biden administration keeping up with this trend, we’ve arrived at a point (Trump 2.0) where the ability to manufacture has become geopolitically critical. With Donald Trump threatening the world with tariffs, both allies and not, we see a world where a country’s manufacturing capability has become a card one can leverage in international negotiations. Understanding this makes clear the strategic importance of this increase in production capabilities of components essential in the present-day and potentially future-day AI. By keeping production capacity inshore, Korea is able to maintain its stature as a global player in the industry, and avoid being crushed with pure military might.

*The information provided is for informational purposes only and does not constitute financial or investment advice. Any investment decisions are made solely at your own risk.*
    `,
    content_ko: `
용인 반도체 클러스터 프로젝트는 단일 산업 프로젝트로는 한국 역사상 최대 규모로 평가받습니다. 용인시에 건설될 예정인 이 1,000조 원 규모의 프로젝트는 세계 최고의 메모리 반도체 생산 업체인 삼성전자와 SK하이닉스가 주도하고 있습니다. 각각 약 400조 원과 600조 원을 투자하는 이 프로젝트는 대한민국의 글로벌 경쟁력의 미래를 결정지을 수 있는 벤처로 간주됩니다.

용인시가 위치한 경기도는 시작부터 한국 반도체 산업의 중심지였습니다. 삼성전자와 SK하이닉스의 거의 모든 팹이 이 도에 위치해 있으며, 반도체 생산 과정에 참여하는 수많은 기업들도 함께 있습니다. 램리서치부터 ASML에 이르기까지 반도체 장비의 핵심 공급업체들이 이 지역에 거주하고 있습니다. 이 프로젝트는 한국을 단순히 반도체 관련 제품이 판매되는 지역이 아니라 활발한 R&D가 수행되는 지역으로 격상시킬 것으로 기대됩니다. 삼성의 반도체 클러스터가 국가 산업 단지로 선정되어 신속한 규제 승인과 보조금 지원 에너지 공급이 이루어지는 등 국가 차원의 지원이 제공되고 있습니다.

반도체 팹은 수율과 직접적으로 연결되어 있기 때문에 안정적인 전력 공급이 필요합니다. 이를 위해서는 전력 인프라에 대한 막대한 투자와 여러 팹을 동시에 가동하는 데 필요한 용량을 공급하기 위한 전국적인 노력이 필요합니다. 전력에 대한 우려가 제기되었는데, 약 16GW의 전력이 필요할 것으로 추정되기 때문입니다. 이는 약 16기의 원자력 발전소의 전력 생산량과 맞먹으며 서울 수도권 에너지 수요의 거의 전부를 차지할 것으로 예상됩니다. 클러스터 내에서 4.5GW의 공급이 생산될 것으로 예상되지만, 나머지 11.5GW는 부분적으로 국가의 다른 지역에서 생성된 전력에서 끌어와야 합니다. 이는 이 프로젝트의 직접적인 혜택을 받지 못하는 지역을 통과하는 새로운 전력망 인프라를 구축해야 함을 의미합니다. 지방 정부와 주민들을 설득하는 것이 과제로 제기되고 있습니다.

![반도체 팹](https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600)

삼성이 건설할 예정인 6개의 팹에는 메모리 반도체와 파운드리 서비스 생산 시설이 모두 포함될 것으로 예상됩니다. 이에 비해 SK하이닉스는 차세대 메모리 반도체 구축에 재원을 집중하고 있습니다. 이러한 생산 능력에 대한 투자 물결은 최근 반도체 산업의 슈퍼 사이클에 대한 대응으로 볼 수 있습니다. 반도체 산업의 주기적인 특성을 고려할 때, 삼성전자와 SK하이닉스처럼 생산 능력을 대폭 늘리고 있는 반도체 생산 업체들의 수익성을 해칠 수 있는 잠재적인 다운 사이클에 대한 우려가 제기될 수 있습니다.

반도체 산업의 주기적인 특성은 생산 업체가 높은 고정비를 가지고 있어 가격 변동에 노출되기 때문에 발생합니다. 전 세계 반도체 기업들의 역사적 수준을 고려할 때, 대부분은 AI 기반 슈퍼 사이클이 예상보다 오래 지속될 것으로 보고 있다고 추론할 수 있습니다. 그러나 이 예측이 틀린 것으로 판명되면 반도체 대형주들은 과거와 마찬가지로 수익성이 급락할 것으로 예상할 수 있습니다. 역사적으로 반도체 사이클은 약 3-4년 동안 지속되었습니다. 현재 사이클은 2024년에 시작된 것으로 주장될 수 있으며, 일부는 2027-2028년까지 지속될 것으로 예상합니다. AI 및 관련 인프라에 대한 현재의 투자 궤적을 고려할 때, 일부는 이 사이클이 이전 사이클보다 더 오래 지속될 가능성이 있는 다른 사이클이라고 주장할 수 있습니다. 공급 측면에서 볼 때, 현재의 반도체 생산 병목 현상과 가격 상승은 생산 능력 확장을 논리적인 선택으로 보이게 하며, 장기적으로 현재의 투자가 유익할 것임을 증명할 것입니다. 그러나 AI 하이퍼스케일러나 AI 스타트업의 수요가 약화되면 시장이 흔들리고 가격이 하락할 수 있습니다. 이제 중요한 문제는 공급이 아니라 수요에 있습니다.

수요와 가격의 단기적인 변동에 관계없이, 장기적으로 팹과 생산 능력에 대한 투자는 경제가 지나치게 소프트웨어 중심에서 하드웨어 중심으로 이동함에 따라 경제적인 선택일 뿐만 아니라 지정학적으로 전략적인 선택으로 남습니다. 최근의 추세는 경제의 자급자족이 그 어느 때보다 중요해졌음을 보여줍니다. 트럼프 1.0부터 우리는 세계화에서 벗어나 아군과 적군이 더 명확하게 정의되는 다극화된 세계로 나아가는 징후를 볼 수 있었습니다. 바이든 행정부가 이러한 추세를 이어가면서 우리는 제조 능력이 지정학적으로 매우 중요해진 시점(트럼프 2.0)에 도달했습니다. 도널드 트럼프가 동맹국이든 아니든 전 세계를 관세로 위협함에 따라, 우리는 한 국가의 제조 능력이 국제 협상에서 활용할 수 있는 카드가 된 세상을 보고 있습니다. 이를 이해하면 현재와 잠재적인 미래의 AI에 필수적인 부품의 생산 능력 증대의 전략적 중요성이 명확해집니다. 생산 능력을 국내에 유지함으로써 한국은 업계에서 글로벌 플레이어로서의 위상을 유지하고, 순수한 군사력에 의해 짓눌리는 것을 피할 수 있습니다.

*제공된 정보는 정보 제공 목적으로만 사용되며 금융 또는 투자 자문을 구성하지 않습니다. 모든 투자 결정은 전적으로 귀하의 책임하에 이루어집니다.*
    `,
  }
];
