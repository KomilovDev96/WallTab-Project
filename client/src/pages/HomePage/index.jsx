import { useState } from "react";
import { ModalCustom } from "../../components"
import { CategoryDATA } from "../../fakerData"
import { EnterCompony, FaneraHomePage, MagicHomePage, WiclientHomePage } from "./components"

export const HomePage = () => {
    const [showModal, setshowModal] = useState(false);
    return (
        <>
            <FaneraHomePage />
            <EnterCompony data={CategoryDATA} />
            <WiclientHomePage />
            <MagicHomePage />
            <button onClick={() => setshowModal(true)}>
                click
            </button>
            <ModalCustom show={showModal} onClose={() => setshowModal(false)}>
                <div>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod facere minus, ea aliquam eligendi totam assumenda recusandae quia, voluptate quaerat veniam, sapiente dolor aut tempora repudiandae. Optio non laudantium laboriosam voluptate quo! Voluptatibus, earum quasi! Incidunt corrupti in nesciunt deserunt sequi laborum, quia odio repellendus veritatis maiores, quisquam eum ea consectetur sapiente sed repellat ipsum iste iure sit praesentium natus ipsa nam delectus tenetur. Quis ducimus saepe at corrupti, ab ut ad numquam placeat? Quia deserunt quidem autem dolores nemo consequatur eveniet iste distinctio consequuntur repudiandae. Soluta odio ducimus enim maiores corporis vel qui nemo dolores ipsam necessitatibus sunt itaque dicta optio alias temporibus atque perspiciatis placeat accusantium, nesciunt id neque. Ex harum impedit, exercitationem laboriosam quibusdam enim maiores repudiandae deserunt minus sit vero, ipsam placeat distinctio unde. Necessitatibus, rem! Libero, doloribus quae. Impedit ab veniam eligendi debitis ullam sit vitae eaque distinctio, ut facere est cum architecto modi odit dolore non optio accusamus commodi! Architecto, et voluptate consequatur, nostrum a reprehenderit cum at voluptatem distinctio dolor sit. Atque corporis, autem incidunt vel saepe accusamus maiores suscipit similique sint voluptatum obcaecati. Cupiditate nesciunt cum quam voluptas harum. Facilis quis eaque velit doloribus quia sunt consequatur, repellendus natus est, dolor accusantium soluta modi nulla deserunt praesentium et repellat aperiam minima id ut cumque? Iste itaque fugiat tempore laboriosam hic totam veritatis eum corporis recusandae quod dolor enim nostrum harum consequuntur nisi amet quidem rerum repudiandae tenetur deserunt, debitis necessitatibus. Cum ea saepe nulla distinctio commodi minima necessitatibus, ipsam at est dicta soluta harum dolorem sunt, accusantium quam aperiam eligendi laboriosam illum magni! Incidunt doloribus officia impedit dignissimos autem saepe ipsa repudiandae quasi adipisci eveniet libero, nisi possimus nam assumenda sequi dolores alias quos voluptatem nostrum eligendi beatae consequuntur ducimus voluptatibus? Iusto quas neque fuga laudantium doloribus quos nemo sint sequi inventore quasi molestiae id illum explicabo accusamus tempore, ratione quia. Consequatur tenetur, quidem libero molestias optio non officia distinctio beatae voluptate tempora magni rem natus perspiciatis nesciunt blanditiis atque praesentium fuga mollitia cupiditate vitae! Dolores eum placeat aut nostrum incidunt, eos recusandae! Deleniti molestias unde reiciendis perferendis mollitia, perspiciatis error odit. Impedit suscipit alias expedita dolore temporibus. Esse earum vitae aperiam? Quod nihil temporibus aspernatur consequuntur ad! Similique qui ipsa inventore reiciendis odit, asperiores nihil repudiandae eligendi officia deleniti. Sunt dolorem eos totam nam dolore eius dignissimos suscipit molestias fuga! Cumque, magnam! Commodi libero maxime ducimus, sed aliquid iure quibusdam neque, aspernatur est accusamus at. Quo facere nesciunt rerum debitis quia vero praesentium illo accusantium deserunt est! Officia, impedit perspiciatis odit blanditiis ut vero laboriosam quibusdam modi nihil. Error mollitia necessitatibus quasi earum corporis vero. Accusantium, impedit unde. Est officiis iusto deserunt soluta explicabo dignissimos, nemo qui. Culpa itaque natus commodi sequi iure explicabo molestiae ullam id, enim nobis veniam adipisci. Eius iusto beatae doloremque dicta amet hic dolores mollitia veniam cum obcaecati voluptatibus, voluptatem sunt sequi pariatur velit aperiam odit molestias tenetur. Magni voluptatem tempora iste, minima quibusdam unde consequatur sint? Nam autem quia minus culpa hic rerum modi ea exercitationem! Ratione unde sed rem perferendis nam fuga magnam dolore tenetur voluptatibus maxime placeat quod aut neque quo delectus, optio asperiores eos, minus, sunt aliquid itaque doloribus distinctio? Cum, consectetur quisquam sit ipsa a mollitia delectus quidem provident soluta dignissimos expedita at libero neque nobis optio unde quasi, dolore laboriosam perspiciatis voluptatum quis? Voluptatum commodi non perspiciatis sed ad delectus temporibus soluta distinctio sit doloribus eos, amet ipsam et repellat reprehenderit id! Quasi vitae quod sint, cupiditate eum tempora magni, minus error mollitia earum dolores illo officia repellat ratione vero neque deleniti voluptates quia assumenda magnam sunt, alias corporis laudantium in. Molestias quam alias ratione blanditiis ex totam tempora, maxime nisi nihil odit illum ab labore ea porro eum ducimus. Id fugit recusandae alias earum similique ab dolor, natus dicta, quod enim voluptate maiores voluptas adipisci, veritatis inventore. Ratione quas laborum ut iure aut provident ea eos inventore. Fuga eius deleniti dolorem rem nesciunt doloremque ad neque reiciendis tempore, aspernatur natus, nihil tenetur placeat. Commodi blanditiis, cupiditate dolores sequi cum nihil ut iste itaque? Facilis atque ipsam exercitationem eveniet provident culpa nam impedit perferendis dolorem, quas quidem sunt inventore at quia quod quae eos adipisci tempora delectus numquam quo explicabo consequatur eius dolorum! Officiis perspiciatis necessitatibus optio quia rerum! Dignissimos iusto exercitationem voluptas aperiam dicta mollitia, laboriosam et. Deserunt aperiam, harum alias voluptatibus praesentium libero eveniet odio, amet architecto ipsa laborum eos excepturi aspernatur quis aliquam cumque natus doloribus quia laudantium vel ad nisi. Aperiam officiis culpa reiciendis earum suscipit doloribus magnam animi repellat, natus error facilis? Impedit saepe repellat, nihil asperiores commodi, quasi temporibus nam corrupti tempora obcaecati explicabo ipsa soluta, eum recusandae natus. Saepe laudantium quam nam veritatis fugiat aut aliquid dolor et magni deleniti asperiores adipisci sapiente molestias fuga deserunt eveniet, omnis, veniam dolorem! Nisi, eaque. Repellat laboriosam ipsum, fugiat suscipit recusandae voluptatibus natus soluta totam error quo id est maiores quia nisi fuga omnis quam architecto eum quasi aliquam veniam ratione corporis non maxime. Dolore vitae in esse molestiae perferendis, corporis nisi facilis exercitationem quae distinctio molestias fuga sed aut fugit architecto! Praesentium assumenda, illo provident tempora obcaecati laboriosam quas asperiores fugit voluptates animi distinctio quo, et nesciunt expedita officiis fuga amet ad delectus iusto nostrum quis iste. Labore dolores cum assumenda. Deserunt in, iure a esse velit ipsam minus. Nam soluta consequatur expedita id totam excepturi rem similique at vel! Deleniti eaque asperiores tenetur dolor voluptatibus commodi ad quod tempora, dignissimos fuga reprehenderit eveniet expedita odio officiis magni fugiat error ullam cum perspiciatis adipisci id. Molestias eos quis omnis fugit nihil perspiciatis dolores possimus cum fugiat rerum, perferendis veritatis vero suscipit. Exercitationem culpa sit nulla architecto laudantium animi nesciunt ducimus tempore natus laboriosam doloribus corrupti cumque, nisi quo error molestias praesentium dicta, eos pariatur porro iure eveniet quaerat! Nam sint ut suscipit. At non mollitia dolore, sapiente amet hic esse cupiditate modi. Deserunt saepe distinctio error labore unde non pariatur inventore officia nam sunt laborum culpa, incidunt, corrupti expedita maiores, vel quae ea vitae harum quod dolore omnis maxime quo molestiae. Minus nulla dolorem placeat! Minima sint, dolorum recusandae ad pariatur sed. Delectus eum quidem nostrum repudiandae itaque! Nobis sint aspernatur error similique corrupti in expedita! Quis veritatis itaque possimus quasi placeat aliquid eligendi culpa fugit debitis reiciendis, molestiae, dolor dicta hic eaque repudiandae pariatur voluptates, ipsum laboriosam. Repudiandae pariatur rerum ex numquam dicta necessitatibus facilis eaque sapiente ut neque doloribus architecto commodi similique natus atque recusandae, est veniam iste dignissimos asperiores? Sequi explicabo asperiores, unde sunt omnis in assumenda eligendi suscipit sapiente natus delectus, provident commodi debitis exercitationem nobis sit cum doloremque, praesentium quod! Qui saepe tempore accusantium aspernatur eligendi voluptatum ab? Veritatis illum inventore necessitatibus, consequatur, consequuntur modi nesciunt atque iste porro quisquam maiores maxime suscipit! Itaque blanditiis impedit fuga recusandae, aperiam tempora voluptate, ea atque officia vel quam a modi! Animi facilis omnis eveniet incidunt error nihil beatae corrupti pariatur doloribus repellendus aliquid laborum, labore impedit nam quibusdam velit iste aperiam! Ipsa corrupti voluptatum illo placeat incidunt, hic deleniti cumque error ad maxime inventore. Recusandae culpa autem reiciendis nobis nulla accusantium praesentium laborum porro adipisci fuga nemo sapiente rem animi tempora voluptas neque aliquam temporibus, nam perferendis! Maiores, saepe quisquam ab eveniet, aut vero modi aliquid quae, expedita tempore debitis magnam molestiae impedit esse blanditiis corrupti! Officiis, dolor? Voluptas mollitia aliquid dolorem perspiciatis, consequatur ipsam, voluptatum nobis ab amet, odit iusto accusantium. A mollitia culpa suscipit saepe deleniti eveniet voluptates quam numquam cumque molestiae, rem iusto sunt quae quas magnam dolorum totam maxime maiores neque nemo nobis fugit amet deserunt. Aliquam ab reiciendis recusandae. Facilis expedita error tempora optio perspiciatis eligendi atque quo sequi veritatis. Explicabo exercitationem, accusantium, repudiandae iusto esse modi dolor blanditiis optio nisi commodi temporibus recusandae culpa. Fuga eos, quam dolore reiciendis soluta quidem assumenda iusto tempore nulla nihil corporis natus facilis deserunt architecto dolores voluptas nostrum ut hic harum recusandae voluptatibus exercitationem velit fugit. Aliquam similique vel dolor necessitatibus ex in, dicta placeat natus facere assumenda asperiores accusantium laboriosam consequatur ducimus voluptates culpa est ullam cum. Alias, quae totam sit aperiam consectetur eaque necessitatibus explicabo voluptatibus error illum sunt ipsum itaque consequatur ad laboriosam? Consectetur debitis obcaecati eos fuga iure mollitia! Minima eos, corrupti quae odio eligendi velit incidunt earum dolorum, nam voluptates quia! Vel quisquam sed necessitatibus earum perferendis? Maxime unde hic magnam corporis provident architecto fugit beatae deserunt facere omnis? Atque illo minus itaque accusamus odio quisquam maxime perferendis amet pariatur! Tenetur expedita, voluptatum voluptatem voluptas ipsum sint doloribus officiis molestiae accusantium eum, aliquid ea neque id repellat libero ab. Atque dolor eum doloremque dicta suscipit impedit inventore aliquam sed, odio ex tempore quia voluptas. Vero excepturi quidem nesciunt illo, saepe similique recusandae numquam, qui voluptas sunt nemo velit assumenda illum? Commodi itaque voluptatem optio, quo debitis tempore aspernatur tempora. Reiciendis neque amet, repellat labore a itaque eveniet quos excepturi aliquam, eius delectus consequatur odit, perspiciatis et voluptas tenetur! Ut, provident minima. Veniam laborum soluta sit maiores facilis doloremque delectus velit a illum quas quidem eum recusandae, nisi, voluptas perferendis minus doloribus similique. Corporis mollitia accusantium, recusandae quidem quaerat beatae, rerum tenetur ut temporibus sapiente hic a consequatur consectetur ipsum dolor? Modi fuga architecto voluptas corporis, eius possimus? Ea optio nostrum dolores ut vero voluptatum corporis velit eaque id aliquam praesentium dolorem recusandae modi perspiciatis, fugiat sed in eos, laboriosam libero commodi cumque. Magnam cum deserunt quis corrupti dolor expedita accusamus optio, repudiandae distinctio tempore sit obcaecati autem necessitatibus perferendis provident aliquam fugiat ex ducimus vel recusandae beatae debitis. Totam voluptate ab modi accusamus ex soluta, iste quos optio sequi dicta ut ipsam tempore odit dolores illum laboriosam aspernatur dignissimos atque alias molestias repellat! Nostrum obcaecati nulla quos praesentium harum blanditiis recusandae deserunt, possimus laudantium voluptate asperiores dicta corporis tempora, inventore veniam, similique accusantium! Sequi impedit molestiae neque repellendus exercitationem fugit repellat temporibus sit hic iure dolorem, laudantium, quidem, in culpa porro! Atque, veniam laborum necessitatibus illum pariatur molestiae voluptatem? Enim libero quo magnam corrupti tempore nobis vero temporibus, in animi quisquam corporis eveniet earum alias est ducimus! Reiciendis, maiores non laudantium excepturi, hic a minus in velit officia odio repellat totam voluptatem quod delectus optio animi nesciunt quam? Perspiciatis similique, sed, neque sunt earum quidem repellat aliquid alias maiores, corrupti consequatur aliquam sapiente tempore veniam mollitia velit minima consequuntur quasi hic magnam? Porro, ullam numquam aspernatur consequuntur in labore totam consectetur, enim deserunt quis aliquam asperiores fuga maiores mollitia! Cumque alias nobis totam, quos cupiditate quod ipsa a ea, ab impedit accusamus placeat praesentium perspiciatis perferendis eos maxime, sequi quis minima accusantium! Illo officia, voluptate alias voluptatem cupiditate pariatur blanditiis! Omnis est, facilis iure assumenda itaque provident labore doloribus adipisci veniam perferendis a quidem cupiditate dolorem quasi laudantium eum similique. Perferendis, illo mollitia dolor quis magni sunt assumenda, animi quas ipsa culpa nulla dolores at aliquid soluta totam nam eum odio doloremque nostrum. Minima cumque fugiat optio nesciunt, vel neque eligendi rerum assumenda deleniti ducimus expedita pariatur quia est eius aliquid ipsum quidem autem vero eum mollitia dolor culpa ab? Quasi et provident autem error ut, rerum ipsum fuga eius ipsam blanditiis exercitationem cupiditate nemo quisquam voluptate dolor quaerat repellat doloremque id sed odit ad? Corporis, deleniti quos odio quis velit a est incidunt iste totam veritatis? Vel eum illum qui accusantium laudantium dolor quaerat pariatur repudiandae dolorem! Ea, adipisci! Quod fugit ab quisquam accusantium eius maxime, ad voluptatum molestiae labore veniam at voluptatibus architecto cum excepturi necessitatibus iste animi quae a sequi dolor. Corrupti ut quasi delectus fugit nemo, asperiores fugiat labore adipisci quod dignissimos omnis libero nulla sapiente sit. Deleniti eius id minima aut ipsa, libero deserunt eos ratione praesentium maiores, illum, aperiam aliquam sapiente? Facilis voluptates harum blanditiis ipsum. Molestiae excepturi error inventore, atque fugiat, accusantium officia adipisci alias recusandae voluptas fuga sed ab. Ex vel natus libero incidunt perferendis ad optio. Et vel ea aliquam repellat deleniti quis? Doloremque quisquam velit suscipit eaque? Molestias illo incidunt impedit nisi vel ut iusto iure. Aliquam dolores quos autem eos quo iusto sint quia.
                </div>
            </ModalCustom>
        </>
    )

}

