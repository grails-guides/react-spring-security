// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'react.spring.security.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'react.spring.security.UserRole'
grails.plugin.springsecurity.authority.className = 'react.spring.security.Role'

grails.plugin.springsecurity.filterChain.chainMap = [
    //Stateless chain
    [
        pattern: '/api/**',
        filters: 'JOINED_FILTERS,-anonymousAuthenticationFilter,-exceptionTranslationFilter,-authenticationProcessingFilter,-securityContextPersistenceFilter,-rememberMeAuthenticationFilter'
    ],

    //Traditional chain
    [
        pattern: '/**',
        filters: 'JOINED_FILTERS,-restTokenValidationFilter,-restExceptionTranslationFilter'
    ]
]

grails.plugin.springsecurity.controllerAnnotations.staticRules = [
    [pattern: '/', access: ['permitAll']],
    [pattern: '/error', access: ['permitAll']],
]