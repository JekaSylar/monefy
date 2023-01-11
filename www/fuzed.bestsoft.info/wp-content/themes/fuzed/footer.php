    <footer>
       <div class="container">
          <a href="<?php echo home_url(); ?>" class="logo">
             <img src="<?php bloginfo('template_url'); ?>/assets/images/logo.svg" alt="logo">
          </a>
          <?php wp_nav_menu(array(
                'theme_location'  => 'main-menu',
                'container'       => false,
                'menu_class'      => 'menu-footer',
                'depth'           => 1,
            )); ?>
          <?php if (have_rows('social_networks', 'option')) : ?>
          <div class="soc-ico">
             <?php while (have_rows('social_networks', 'option')) : the_row(); ?>
             <?php $icon = get_sub_field('icon'); ?>
             <a href="<?php the_sub_field('link'); ?>">
                <img src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo esc_attr($icon['alt']); ?>" />
             </a>
             <?php endwhile; ?>

             <?php the_title(); ?>
          </div>
          <?php endif; ?>
       </div>
       <div class="copiring">© <?php echo date('Y'); ?> All rights reserved.</div>
    </footer>

    <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
       <img src="<?php bloginfo('template_url'); ?>/assets/images/BFF_Heart.png" alt=""
          class="bff-heart-sticker modal-sticers">
       <img src="<?php bloginfo('template_url'); ?>/assets/images/Raspberry.svg" alt=""
          class="modal-sticers raspberry-sticker">
       <img src="<?php bloginfo('template_url'); ?>/assets/images/Purple_Eye.svg" alt=""
          class="modal-sticers purple-eye-sticker">
       <img src="<?php bloginfo('template_url'); ?>/assets/images/hart.svg" alt="" class="modal-sticers hart-sticker">
       <img src="<?php bloginfo('template_url'); ?>/assets/images/Green_Bolt.svg" alt=""
          class="modal-sticers green-bolt-sticker">
       <img src="<?php bloginfo('template_url'); ?>/assets/images/Red_Sparkle.svg" alt=""
          class="modal-sticers red-sparkle-sticker">
       <div class="title">Contact<span>an Expert</span></div>
       <?php echo do_shortcode('[contact-form-7 id="22" title="Contact an Expert"]'); ?>
    </div>

    <?php wp_footer() ?>
    </body>

    </html>