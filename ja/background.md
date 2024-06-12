# 背景

## AIの発展
AIの技術進歩により、知識の獲得はより手軽になりましたが、その知識が実際に身についているかの確認は困難です。
2022年11月、[サム・アルトマン](https://x.com/sama)が[OpenAI](https://openai.com/)の代表として[ChatGPT](https://chat.openai.com/)を初めて公開しました。以降、ChatGPTのような仮想アシスタントの急速な発展により、誰でもより容易に必要な情報にアクセスできるようになっただけではなく、文章やサマリーの作成など人間が行う作業と遜色ないレベルでのアウトプットを瞬時で出すことができるようになりました。

## オンチェーン人格の形成
[Vitalik Buterin](https://x.com/VitalikButerin)らが書いた[Decentralized Society: Finding Web3's Soul
](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763)の論文によると、今後、オンチェーン人格の形成が進みオンチェーン上での信用構築が行われると、Trust Lessな取引からTrustFulな取引も可能になる未来を指摘しています。個人が知識を身に着けていることをオンチェーン上で証明することができると、こうしたオンチェーン人格の形成にも寄与します。

## L2の技術革新
[Ethereum](https://ethereum.org/)の進化の中で、大きな課題となっていたのは、高い手数料と遅いトランザクションです。1つのトランザクションがブロックに入るまで15秒かかり、数ドルから数十ドルのETHがガス代として必要な状況では、Defiのようなfinancial applicationを除いたDappsが広く使われることは難しかったです。

しかし、2021年にEthereumのLayer2として[Optimism](https://www.optimism.io/)や[Arbitrum](https://arbitrum.io/)がリリースされ、2023年には各L2トークンが発行されれるようになると、Layer 2の実用化フェーズが現実化してきました。また、2024年3月の[Dencunアップデート](https://ethereum.org/en/roadmap/dencun/)によって、L2のガス代が1/100まで減ったことで、L2でのトランザクション手数料は$0.01以下になりました。

トランザクションの処理速度が遅く、ガス代が高い環境下では、スマートコントラクト上での計算ロジックやストレージは削ぎ落とし、外部でデータやロジックを管理することが主流でしたが、L2の発達によって、ブロックチェーン上でより複雑なロジックを管理したり、ストレージとして利用したりすることが安価で可能になりました。これにより、financialなDeFi以外のアプリケーションがより手軽に作れるようになってきています。

我々は、この動きは加速し、さらに費用はおさえられ、ブロックチェーン自体をストレージとして利用できるようになると踏んでいます。論拠として、DAレイヤーの登場や[RollupにPlasmaの概念を持ち込む議論](https://vitalik.eth.limo/general/2023/11/14/neoplasma.html)がなされていることが挙げられます。

## 従来のオンライン試験の課題
オンラインで試験を行う際に問題となるのが、ユーザーが本人であることを証明することの困難さです。例えば、テストが得意な友達にオンラインテストの受験に必要なIDとパスワードを渡して代わりに試験を受けてもらい、成績を偽造することが可能になります。
通常のオンライン試験では、こうした身代わり受験を防ぐために、厳格な本人認証（KYC）やカメラをオンにした状態での試験受験などが必要になり、試験導入側、ユーザー双方にとって大きな負担となっています。
また、オンライン上で発行された証明書の有効性は、発行機関に依存するという問題点もあります。[Coursera](https://www.coursera.org/)や[Udemy](https://www.udemy.com/)のようなオンライン学習プラットフォームでは、コースの完了後に独自の証明書を提供しており、将来的には、このような学習プラットフォームでは、個人アカウントとアドレスを紐づけ、証明書をSBTとして発行することも可能でしょう。

しかし、この仕組みの問題点として、テストの合格者とデジタル証明書の紐づけを特定主体に依存してしまうということが挙げられます。第三者はテスト合格者が本当にそのテストに合格してデジタル証明書を持っているのかをVerifyすることができません。

例えば、100点満点中のうち、80点を取ると合格であるテストがあったとしても、そのような判定ロジックが公開されていないため（たとえそのようにHP上に書かれていてもVerifyできない）、真にそのデジタル証明書がテストの結果に基づいて発行されたものであるかを第三者が確認することができないことになります。