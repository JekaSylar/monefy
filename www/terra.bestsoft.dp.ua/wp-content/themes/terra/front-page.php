<?php get_header() ?>

<?php if ( have_rows( 'perevagy' ) ) : ?>


		<section class="section section__features">
   <div class="container">
      <div class="features">
         <h2 class="features__title title"><?php the_field( 'nazva_bloku_adv' ); ?></h2>
         <div class="features__items">
            <?php while ( have_rows( 'perevagy' ) ) : the_row(); ?>
               <?php $perevaga = get_sub_field( 'perevaga' ); ?>
            <div class="features__item">
               <?php echo get_the_post_thumbnail( $perevaga, 'full', ['class' => 'features__img-bg', 'alt' => get_the_title($perevaga)] ) ?>
               <h4 class="features__item-title text"><?php echo get_the_title($perevaga); ?></h4>
            <?php if(get_sub_field( 'opys' )): ?>
               <p class="features__item-text text-small"><?php the_sub_field( 'opys' ); ?></p>
            <?php endif; ?>
            <?php if(get_sub_field( 'posylannya_na_povnyj_opys' ) == 'yes'): ?>
               <a href="<?php echo get_permalink( $perevaga ); ?>" class="features__item-btn btn subtext-big">БІЛЬШЕ</a>
            <?php endif; ?>   
            </div>
            <?php endwhile; ?>
            
         </div>
      </div>
   </div>
</section>

<?php endif; ?>

<?php if(get_field( 'vidobrazhaty_blok' )): ?>

   <?php $halls = new WP_Query([

         'post_type' => 'halls',
         'posts_per_page' => -1,


   ]); ?>

   <?php if ( $halls->have_posts() ) : ?>
<section class="section section__zal">
   <div class="zal">
      <h2 class="zal__title title"><?php the_field( 'zagolovok_bloku_hill' ); ?></h2>
      <div class="zal__swiper swiper">
         <div class="swiper-wrapper">
   <?php while ( $halls->have_posts() ) : $halls->the_post(); ?>
     <div class="swiper-slide slide">
               <div class="container">
                  <div class="slide__container">
                     <h4 class="slide__title title-small"><?php the_title(); ?></h4>
                     <p class="slide__text subtext-big"><?php the_field( 'korotkyj_opys' ); ?></p>
                     <p class="slide__text subtext-big"><?php the_field( 'dodatkova_tekst' ); ?></p>
                     <div class="slide__content">
                        <div class="slide__content-item">
                           <p class="slide__content-text subtext-big">Площа зали:</p>
                           <p class="slide__content-text subtext-big"><?php the_field( 'ploshha_zaly' ); ?></p>
                        </div>
                        <div class="slide__content-item">
                           <p class="slide__content-text subtext-big">Площа вікон:</p>
                           <p class="slide__content-text subtext-big"><?php the_field( 'ploshha_vikon' ); ?></p>
                        </div>
                     </div>
                     <div class="slide__controls">
                        <a href="<?php the_permalink(); ?>" class="slide__btn btn btn-dark subtext-big">БІЛЬШЕ</a>
                        <div class="slide__control">
                           <div class="swiper-prev swiper-btn"><img src="<?php echo get_template_directory_uri() ?>/assets/img/swiper-arrow.svg" alt="swiper-arrow"></div>
                           <div class="swiper-pagination">01\02</div>
                           <div class="swiper-next swiper-btn"><img src="<?php echo get_template_directory_uri() ?>/assets/img/swiper-arrow.svg" alt="swiper-arrow"></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="slide__img">
                  <?php echo kama_thumb_img('w=700 &h=786 &crop=false  &alt='.get_the_title( ).''); ?>
               </div>
            </div>
   <?php endwhile; ?>
    </div>
      </div>
   </div>
</section>
   <?php endif; ?>
   <?php wp_reset_query(); ?> 


<?php endif; ?>

<?php if ( have_rows( 'kalendar' ) ) : ?>

<section class="section section__calendar section__calendar-home">
   <div class="container">
      <div class="calendar" id="calendar">
         <h2 class="calendar__title title"><?php the_field( 'nazva_bloku_cal' ); ?></h2>
         <div class="calendar__img">
		    <ul class="calendar__header">
            <?php $i = 1; ?>
            <?php while ( have_rows( 'kalendar' ) ) : the_row(); ?>
               <li class="calendar__header-item text tab-link <?php if($i == 1): ?> active <?php endif; ?>" onclick="openTab(event, 'item<?php echo $i; ?>', 'calendar')">
                  <?php the_sub_field( 'nazva_kalendarya' ); ?>
               </li>
               <?php $i++; ?>
            <?php endwhile; ?>   
            </ul>
            <div class="calendar__items">
            <?php $j = 1; ?>
               <?php while ( have_rows( 'kalendar' ) ) : the_row(); ?>
               <div class="calendar__img tab-item <?php if($j==1): ?> active <?php endif; ?>" id="item<?php echo $j; ?>">
                  <?php echo do_shortcode(get_sub_field( 'short_kod' )) ?>
               </div>
               <?php $j++; ?>
              <?php endwhile; ?> 
               
            </div>
		  </div>
      </div>
   </div>
</section>

<?php endif; ?>


<?php $foto_images = get_field( 'foto' ); ?>
<?php if ( $foto_images ) :  ?>

		<section class="section section__filmed">
   <div class="filmed">
      <h2 class="filmed__title title"><?php the_field( 'nazva_bloku_photo' ); ?></h2>
      <div class="filmed__items">
         <?php foreach ( $foto_images as $foto_image ): ?>
         <div class="filmed__item">
            <a href="<?php echo esc_url( $foto_image['url'] ); ?>">
            <img src="<?php echo esc_url( $foto_image['url'] ); ?>" alt="<?php echo esc_attr( $foto_image['alt'] ); ?>" />
            </a>
         </div>
         <?php endforeach; ?>
      </div>
   </div>
</section>

<?php endif; ?>

<?php get_footer() ?>