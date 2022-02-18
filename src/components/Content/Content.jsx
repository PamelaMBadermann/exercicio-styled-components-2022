import React from 'react';
import { SingleLabelOcean } from '../SingleLabelOcean/SingleLabelOcean';
import { Utils } from '../Utils/Utils';
import { TextCard } from '../TextCard/TextCard';
import { ImageCard } from '../ImageCard/ImageCard';

import { ContentRow, ContentStyle } from './style';

export function Content(props) {
    return (
        <ContentStyle>
            <SingleLabelOcean label="Minha primeira página React." />
            <Utils />
            <ContentRow>
                <TextCard title="Lorem ipsum 1"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget posuere lectus. Fusce sed volutpat nunc. Praesent commodo ultrices cursus. Maecenas ac fermentum magna. Proin vehicula eros vel blandit dictum. Etiam congue auctor nulla, sed aliquam est malesuada at. Praesent quis commodo justo. Vestibulum tristique, nibh non condimentum euismod, massa neque pretium purus, in dictum ligula arcu quis sem. Nullam dapibus placerat dui at lobortis. Nulla et suscipit lacus. Quisque nec eros hendrerit, rhoncus lorem nec, rhoncus risus. Pellentesque euismod, magna a congue aliquet, ipsum mi luctus ex, et placerat lacus erat eget magna. Duis dapibus tristique odio, eget iaculis justo ornare efficitur. Phasellus felis dui, efficitur hendrerit est non, pretium volutpat nulla. Cras eu volutpat lacus, non posuere magna."></TextCard>
                <ImageCard></ImageCard>
            </ContentRow>
            <ContentRow>
                <ImageCard></ImageCard>
                <TextCard title="Lorem ipsum 2"
                text="Curabitur gravida enim sed sagittis tempus. In hac habitasse platea dictumst. In nec tellus euismod, volutpat lectus in, pretium tortor. Morbi ultrices orci sed pulvinar interdum. Pellentesque nibh nibh, rhoncus sed sagittis laoreet, dapibus eget purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean egestas magna non tristique vehicula. Nam posuere consequat tortor, ut pretium mi tincidunt sit amet. Cras ornare purus ut lacus commodo suscipit. Fusce metus lacus, venenatis tempus dignissim ac, sollicitudin ac sem. Maecenas gravida sapien in risus tempus ornare. Quisque malesuada mi velit, eu ultricies ligula venenatis interdum. Aliquam iaculis eleifend neque quis porta. Suspendisse aliquam luctus dolor. Sed vitae dui ac justo euismod mollis et ac augue."></TextCard>
            </ContentRow>
            <ContentRow>
                <TextCard title="Lorem ipsum 3"
                text="Donec vel auctor nibh, a tincidunt lectus. Aenean eu purus ac elit semper condimentum ac vestibulum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tempus lacinia elit et bibendum. Praesent placerat libero sed ligula semper, quis hendrerit augue congue. Integer id arcu sit amet eros varius commodo id eget ante. Suspendisse euismod odio vitae mi bibendum eleifend. Vestibulum non lobortis justo, et iaculis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin in dictum lacus, in tincidunt nibh. Curabitur eget auctor lacus. Aenean suscipit feugiat eros, non viverra ante viverra sit amet. Morbi rhoncus massa quis turpis imperdiet rutrum. Vestibulum vel pellentesque enim, sit amet eleifend metus. Morbi finibus massa tortor, ac fringilla quam tincidunt nec. Nam sed urna ligula."></TextCard>
                <ImageCard></ImageCard>
            </ContentRow>
            <SingleLabelOcean label="Contato" />
        </ContentStyle>
    )
}